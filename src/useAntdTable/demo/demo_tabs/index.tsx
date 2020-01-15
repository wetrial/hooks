import React, { Suspense, useMemo, useState } from 'react';
import { Tabs, Form, Input, Button } from 'antd';
import useAntdTable from '../../index';
import { getLists, getTodos } from './service';

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
    api = getLists;
  } else {
    showTabPanel = React.lazy<any>(() => import('./Todos'));
    api = getTodos;
  }

  return {
    activeKey,
    api,
    ShowTabPanel: showTabPanel,
  };
}

const MyTabs = () => {
  const [form] = Form.useForm();

  const [active, setActive] = useState('index');

  const handleChangeTab = key => {
    setActive(key);
  };

  const { activeKey, ShowTabPanel, api } = useMemo(() => getCurTab(active), [active]);

  const { tableProps, filters, sorter, search } = useAntdTable<any, any>(api, [activeKey], {
    defaultPageSize: 10,
    form,
    id: 'tabs_tableId',
    formatResult: result => ({
      total: result.totalCount,
      data: result.items,
    }),
  });

  const { type, changeType, submit, reset } = search || {};
  return (
    <>
      <Form form={form} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Form.Item name="name" label="name">
          <Input placeholder="enter name" style={{ width: 140, marginRight: 16 }} />
        </Form.Item>

        {type === 'advance' && (
          <>
            <Form.Item name="email" label="email">
              <Input placeholder="enter email" style={{ width: 140, marginRight: 16 }} />
            </Form.Item>
            <Form.Item name="phone" label="phone">
              <Input placeholder="enter phone" style={{ width: 140, marginRight: 16 }} />
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button type="primary" onClick={submit}>
            Search
          </Button>
          <Button onClick={reset} style={{ marginLeft: 8 }}>
            Reset
          </Button>
          <Button type="link" onClick={changeType}>
            {type === 'simple' ? 'Expand' : 'Close'}
          </Button>
        </Form.Item>
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

export default MyTabs;
