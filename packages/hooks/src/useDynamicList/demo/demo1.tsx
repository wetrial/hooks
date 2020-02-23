/**
 * title: Default usage
 * desc: a form that can add/remove fields dynamically.
 *
 * title.zh-CN: 动态列表
 * desc.zh-CN: 可增删的不定条数表单
 */

import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDynamicList } from '@wetrial/hooks';

export default () => {
  const [form] = Form.useForm();
  const { list, remove, getKey, push } = useDynamicList(['David', 'Jack']);
  const initialValues = {
    names: list,
  };
  const [result, setResult] = useState('');

  const Row = (index: number) => (
    <Form.Item>
      <Form.Item noStyle name={['names', getKey(index)]}>
        <Input style={{ width: 300 }} placeholder="Please enter your name" />
      </Form.Item>
      {list.length > 1 && (
        <MinusCircleOutlined
          style={{ marginLeft: 8 }}
          onClick={() => {
            remove(index);
          }}
        />
      )}
      <PlusCircleOutlined
        style={{ marginLeft: 8 }}
        onClick={() => {
          push('');
        }}
      />
    </Form.Item>
  );

  return (
    <>
      <Form initialValues={initialValues} form={form}>
        {list.map((ele, index) => Row(index))}
      </Form>
      <Button
        style={{ marginTop: 8 }}
        type="primary"
        onClick={() =>
          form.validateFields().then(val => {
            setResult(JSON.stringify(val || {}));
          })
        }
      >
        Submit
      </Button>
      <div>{result}</div>
    </>
  );
};
