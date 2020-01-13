import React from 'react';
import { Table } from 'antd';

export default function(props) {
  const { sorter, filters, tableProps } = props;
  const columns = [
    {
      title: 'tenancyName',
      dataIndex: 'tenancyName',
      sorter: true,
      sortOrder: sorter.field === 'tenancyName' ? sorter.order : false,
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: true,
      sortOrder: sorter.field === 'name' ? sorter.order : false,
    },
    {
      title: 'operator',
      dataIndex: 'operator',
    },
    {
      title: 'editionDisplayName',
      dataIndex: 'editionDisplayName',
      filters: [
        { text: 'Standand', value: 'Standand' },
        { text: 'VIP', value: 'VIP' },
        { text: 'Super VIP', value: 'Super VIP' },
      ],
      filteredValue: filters.editionDisplayName,
    },
  ];
  return <Table {...tableProps} columns={columns} rowKey="id" />;
}
