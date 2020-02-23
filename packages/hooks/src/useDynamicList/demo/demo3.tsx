/**
 * title: Dyanmic table(draggable)
 * desc: using antd table to build dynamic table form.
 *
 * title.zh-CN: 动态表格(可拖拽)
 * desc.zh-CN: 使用 antd table 构建动态表格
 */

import React, { useState } from 'react';
import { Form, Button, Input, Table } from 'antd';
import { DragOutlined } from '@ant-design/icons';
import ReactDragListView from 'react-drag-listview';
import { useDynamicList } from '@wetrial/hooks';

interface Item {
  name?: string;
  age?: string;
  memo?: string;
}

export default () => {
  const [form] = Form.useForm();
  const { list, remove, getKey, move, push, sortForm } = useDynamicList<Item>([
    { name: 'my bro', age: '23', memo: "he's my bro" },
    { name: 'my sis', age: '21', memo: "she's my sis" },
    {},
  ]);
  const [result, setResult] = useState('');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, row: Item, index: number) => (
        <Form.Item>
          <DragOutlined style={{ cursor: 'move', marginRight: 8 }} />
          <Form.Item noStyle name={['params', getKey(index), 'name']}>
            <Input style={{ width: 120, marginRight: 16 }} placeholder="name" />
          </Form.Item>
        </Form.Item>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text: string, row: Item, index: number) => (
        <Form.Item name={['params', getKey(index), 'age']}>
          <Input style={{ width: 120, marginRight: 16 }} placeholder="age" />
        </Form.Item>
      ),
    },
    {
      key: 'memo',
      title: 'Memo',
      dataIndex: 'memo',
      render: (text: string, row: Item, index: number) => (
        <Form.Item>
          <Form.Item noStyle name={['params', getKey(index), 'memo']}>
            <Input style={{ width: 300, marginRight: 16 }} placeholder="please input the memo" />
          </Form.Item>
          <Button.Group>
            <Button type="danger" onClick={() => remove(index)}>
              Delete
            </Button>
          </Button.Group>
        </Form.Item>
      ),
    },
  ];

  return (
    <>
      <ReactDragListView
        onDragEnd={(oldIndex: number, newIndex: number) => move(oldIndex, newIndex)}
        handleSelector={'i[aria-label="icon: drag"]'}
      >
        <Form initialValues={{ params: list }} form={form}>
          <Table
            columns={columns}
            dataSource={list}
            rowKey={(r: Item, index: number) => getKey(index).toString()}
            pagination={false}
          />
        </Form>
      </ReactDragListView>
      <Button
        style={{ marginTop: 8 }}
        block
        type="dashed"
        onClick={() => push({ name: 'new row', age: '25' })}
      >
        + Add row
      </Button>
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={() => setResult(JSON.stringify(sortForm(form.getFieldsValue().params), null, 2))}
      >
        Submit
      </Button>
      <div style={{ whiteSpace: 'pre' }}>{result && `content: ${result}`}</div>
    </>
  );
};
