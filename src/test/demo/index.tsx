import React, { Suspense, useMemo } from 'react';
import router from 'umi/router';
import { Tabs, Form, Input, Button } from 'antd';
import { useAntdTable, activeCache } from '@wetrial/hooks';
import { getTenants, getHosts } from './service';

const { TabPane } = Tabs;

const keys = [
  {
    tab: '全部',
    key: 'index',
  },
  {
    tab: '待办',
    key: 'todos',
  },
];

function getCurTab(active) {
  const activeKey = active || keys[0].key;

  let showTabPanel;
  let api;
  if (activeKey === 'index') {
    showTabPanel = React.lazy<any>(() => import('./List'));
    api = getTenants;
  } else {
    showTabPanel = React.lazy<any>(() => import('./Todos'));
    api = getHosts;
  }

  return {
    activeKey,
    api,
    ShowTabPanel: showTabPanel,
  };
}

const MyTabs = props => {
  const {
    location: { query },
    form: { getFieldDecorator },
  } = props;

  const handleChangeTab = active => {
    activeCache('tableId', true);
    router.push({
      query: {
        active,
      },
    });
  };

  const { activeKey, ShowTabPanel, api } = useMemo(() => getCurTab(query.active), [query.active]);

  const { tableProps, filters, sorter, search } = useAntdTable<any, any>(api, [activeKey], {
    defaultPageSize: 5,
    form: props.form,
    id: 'tableId',
    formatResult: result => ({
      total: result.totalCount,
      data: result.items,
    }),
  });

  const { type, changeType, submit, reset } = search || {};

  return (
    <>
      <Form style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {getFieldDecorator('name')(
          <Input placeholder="enter name" style={{ width: 140, marginRight: 16 }} />,
        )}

        {type === 'advance' && (
          <>
            {getFieldDecorator('email')(
              <Input placeholder="enter email" style={{ width: 140, marginRight: 16 }} />,
            )}
            {getFieldDecorator('phone')(
              <Input placeholder="enter phone" style={{ width: 140, marginRight: 16 }} />,
            )}
          </>
        )}
        <Button type="primary" onClick={submit}>
          Search
        </Button>
        <Button onClick={reset} style={{ marginLeft: 8 }}>
          Reset
        </Button>
        <Button type="link" onClick={changeType}>
          {type === 'simple' ? 'Expand' : 'Close'}
        </Button>
      </Form>
      <Tabs onChange={handleChangeTab} defaultActiveKey={activeKey}>
        {keys.map(item => (
          <TabPane tab={item.tab} key={item.key}>
            {item.key !== activeKey ? null : (
              <Suspense fallback={<div>Loading...</div>}>
                <ShowTabPanel
                  tableProps={{
                    ...tableProps,
                    pagination: {
                      ...tableProps.pagination,
                      showSizeChanger: true,
                      showQuickJumper: true,
                    },
                  }}
                  filters={filters}
                  sorter={sorter}
                />
              </Suspense>
            )}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Form.create()(MyTabs);
