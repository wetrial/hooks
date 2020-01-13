import React from 'react';
import { Table } from 'antd';

export default function(props) {
  const { sorter, filters, tableProps } = props;
  const columns = [
    {
      title: 'hostTenancyName',
      dataIndex: 'hostTenancyName',
      sorter: true,
      sortOrder: sorter.field === 'hostTenancyName' ? sorter.order : false,
    },
    {
      title: 'hostName',
      dataIndex: 'hostName',
      sorter: true,
      sortOrder: sorter.field === 'hostName' ? sorter.order : false,
    },
    {
      title: 'hostOperator',
      dataIndex: 'hostOperator',
    },
    {
      title: 'hostEditionDisplayName',
      dataIndex: 'hostEditionDisplayName',
      filters: [
        { text: 'Standand', value: 'Standand' },
        { text: 'VIP', value: 'VIP' },
        { text: 'Super VIP', value: 'Super VIP' },
      ],
      filteredValue: filters.hostEditionDisplayName,
    },
  ];
  return <Table {...tableProps} columns={columns} rowKey="id" />;
}
