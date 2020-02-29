import React from 'react';
import { Button } from 'antd';
import { activeCache } from '@wetrial/hooks';

export default () => {
  return (
    <Button
      type="default"
      onClick={() => {
        activeCache('antd/use-form-table');
        window.g_history.push({
          pathname: 'antd/use-form-table',
          hash: '#数据缓存',
        });
      }}
    >
      返回useFormTable页面
    </Button>
  );
};
