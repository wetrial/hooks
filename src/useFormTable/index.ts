/* eslint-disable no-underscore-dangle */
import { useState, useCallback, useEffect, useRef } from 'react';
import { useRequest, useSessionStorageState, useUpdateEffect, usePersistFn } from '@umijs/hooks';
import {
  CombineService,
  PaginatedParams,
  BasePaginatedOptions,
  PaginatedOptionsWithFormat,
  PaginatedFormatReturn,
  PaginatedResult,
} from '@umijs/use-request/lib/types';

export {
  CombineService,
  PaginatedParams,
  BasePaginatedOptions,
  PaginatedOptionsWithFormat,
  PaginatedFormatReturn,
  PaginatedResult,
};

export interface Store {
  [name: string]: any;
}

export interface UseAntdTableFormUtils {
  getFieldInstance?: (name: string) => {}; // antd 3
  setFieldsValue: (value: Store) => void;
  getFieldsValue: (...args: any) => Store;
  resetFields: (...args: any) => void;
  [key: string]: any;
}

export interface Result<Item> extends PaginatedResult<Item> {
  search: {
    type: 'simple' | 'advance';
    changeType: () => void;
    submit: () => void;
    reset: () => void;
  };
}

export interface BaseOptions<U> extends Omit<BasePaginatedOptions<U>, 'paginated'> {
  form?: UseAntdTableFormUtils;
}

export interface OptionsWithFormat<R, Item, U>
  extends Omit<PaginatedOptionsWithFormat<R, Item, U>, 'paginated'> {
  form?: UseAntdTableFormUtils;
}

type TFormatResult = (data: any) => any;

let formatResult: TFormatResult;

// 缓存前缀
const TABLECACHEPREFIX = '__WETRIAL_USEFORMTABLE__';

function useFormTable<R = any, Item = any, U extends Item = any>(
  service: CombineService<R, PaginatedParams>,
  options: OptionsWithFormat<R, Item, U>,
): Result<Item>;
function useFormTable<R = any, Item = any, U extends Item = any>(
  service: CombineService<PaginatedFormatReturn<Item>, PaginatedParams>,
  options: BaseOptions<U>,
): Result<Item>;
function useFormTable<R = any, Item = any, U extends Item = any>(
  service: CombineService<any, any>,
  options: BaseOptions<U> | OptionsWithFormat<R, Item, U>,
): any {
  const { form, refreshDeps = [], manual, cacheKey, ...restOptions } = options;
  const [storeCache, setStoreCache] = useSessionStorageState<any>(`${TABLECACHEPREFIX}${cacheKey}`);

  const result = useRequest(service, {
    formatResult,
    ...restOptions,
    paginated: true,
    manual: true,
  });

  let { params } = result;
  const { run } = result;

  const cacheFormTableData = params[2] || ({} as any);

  // 优先从缓存中读
  const [type, setType] = useState(cacheFormTableData.type || 'simple');

  // 全量 form 数据，包括 simple 和 advance
  const [allFormData, setAllFormData] = useState<Store>(cacheFormTableData.allFormData || {});

  useUpdateEffect(() => {
    if (cacheKey) {
      setStoreCache({
        pagination: params[0] || {},
        type,
        allFormData,
      });
    }
  }, [params[0], type, allFormData]);

  // 获取当前展示的 form 字段值
  const getActivetFieldValues = useCallback((): Store => {
    if (!form) {
      return {};
    }
    // antd 3
    if (form.getFieldInstance) {
      const tempAllFiledsValue = form.getFieldsValue();
      const filterFiledsValue: Store = {};
      Object.keys(tempAllFiledsValue).forEach((key: string) => {
        if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
          filterFiledsValue[key] = tempAllFiledsValue[key];
        }
      });
      return filterFiledsValue;
    }
    // antd 4
    return form.getFieldsValue(null, () => true);
  }, [form]);

  const formRef = useRef(form);
  formRef.current = form;
  /* 初始化，或改变了 searchType, 恢复表单数据 */
  useEffect(() => {
    if (!formRef.current) {
      return;
    }
    // antd 3
    if (formRef.current.getFieldInstance) {
      // antd 3 需要判断字段是否存在，否则会抛警告
      const filterFiledsValue: Store = {};
      Object.keys(allFormData).forEach((key: string) => {
        if (formRef.current!.getFieldInstance ? formRef.current!.getFieldInstance(key) : true) {
          filterFiledsValue[key] = allFormData[key];
        }
      });
      formRef.current.setFieldsValue(filterFiledsValue);
    } else {
      // antd 4
      formRef.current.setFieldsValue(allFormData);
    }
  }, [type]);

  // 首次加载，手动提交。为了拿到 form 的 initial values
  useEffect(() => {
    // 如果有缓存，则使用缓存，重新请求
    if (params.length > 0) {
      run(...params);
      return;
    }
    // 使用缓存的情况
    if (cacheKey && params.length === 0) {
      /* 有缓存，恢复 */
      const isRefresh =
        window.performance &&
        window.performance.navigation &&
        (PerformanceNavigation.TYPE_RELOAD === window.performance.navigation.type ||
          PerformanceNavigation.TYPE_BACK_FORWARD === window.performance.navigation.type);
      if (storeCache && (storeCache.active || isRefresh)) {
        params = [
          storeCache.pagination || {},
          storeCache.allFormData,
          {
            type: storeCache.type,
            allFormData: storeCache.allFormData,
          },
        ];
        setType(storeCache.type || type);
        setAllFormData(storeCache.allFormData);
        run(...params);
        return;
      }
    }

    // 如果没有缓存，触发 submit
    if (!manual) {
      // eslint-disable-next-line
      submit();
    }
  }, []);

  const changeType = useCallback(() => {
    const currentFormData = getActivetFieldValues();
    setAllFormData({ ...allFormData, ...currentFormData });

    const targetType = type === 'simple' ? 'advance' : 'simple';
    setType(targetType);
  }, [type, allFormData, getActivetFieldValues]);

  const submit = useCallback(
    (e?: any) => {
      if (e?.preventDefault) {
        e.preventDefault();
      }
      setTimeout(() => {
        const activeFormData = getActivetFieldValues();
        // 记录全量数据
        const _allFormData = { ...allFormData, ...activeFormData };
        setAllFormData(_allFormData);
        run(
          {
            pageSize: options.defaultPageSize || 10,
            ...(params[0] || {}), // 防止 manual 情况下，第一次触发 submit，此时没有 params[0]
            current: 1,
          },
          activeFormData,
          {
            allFormData: _allFormData,
            type,
          },
        );
      });
    },
    [getActivetFieldValues, run, params, allFormData, type],
  );

  const reset = useCallback(() => {
    if (form) {
      form.resetFields();
    }
    submit();
  }, [form, submit]);

  const resetPersistFn = usePersistFn(reset);

  // refreshDeps 变化，reset。
  useUpdateEffect(() => {
    if (!manual) {
      resetPersistFn();
    }
  }, [...refreshDeps]);

  return {
    ...result,
    search: {
      submit,
      type,
      changeType,
      reset,
    },
  };
}

export default useFormTable;

/**
 * 激活缓存
 * @param key 页面缓存的key
 * @param reset 重置分页信息或者用指定数据覆盖
 */
export const activeCache = (key: string, reset: boolean | Store = false) => {
  const cacheKey = `${TABLECACHEPREFIX}${key}`;
  if (sessionStorage) {
    const cache = sessionStorage.getItem(cacheKey);
    if (cache !== null) {
      let cacheData = JSON.parse(cache);
      cacheData.active = true;
      if (reset) {
        if (typeof reset === 'boolean') {
          delete cacheData._count;
          delete cacheData.pageSize;
          cacheData = {
            ...cacheData,
            current: 1,
            sorter: {},
            // _count: 1,
          };
        } else {
          cacheData = { ...cacheData, ...reset };
        }
      }
      sessionStorage.setItem(cacheKey, JSON.stringify(cacheData));
    }
  }
};

export const configUseFormTableFormatResult = (configFormatResult: TFormatResult) => {
  formatResult = configFormatResult;
};
