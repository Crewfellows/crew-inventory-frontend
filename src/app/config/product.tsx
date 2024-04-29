import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';

import { ProductDataType } from '../models/product';

import type { TableProps } from 'antd';

export const productTableColumns: TableProps<ProductDataType>['columns'] = [
  {
    title: 'Product Id',
    dataIndex: 'id',
    key: 'id',

    render: (_, { id }) => {
      let color = 'blue';
      const idNumber = parseInt(id.replace(/\D/g, ''), 10);

      if (idNumber % 2 !== 0) {
        color = 'red';
      }

      return (
        <Tag color={color} key={id}>
          {id}
        </Tag>
      );
    },
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Purchase Price',
    dataIndex: 'purchasePrice',
    key: 'purchasePrice',
    sorter: (a, b) => a.purchasePrice - b.purchasePrice,
  },
  {
    title: 'Sale Price',
    dataIndex: 'salePrice',
    key: 'salePrice',
    sorter: (a, b) => a.salePrice - b.salePrice,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
  },

  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
];
export const productData: ProductDataType[] = [
  {
    id: 'p1',
    name: 'Sweet Berry',
    purchasePrice: 500,
    salePrice: 1000,
    quantity: 10,
  },
  {
    id: 'p2',
    name: 'Red Berry',
    purchasePrice: 1000,
    salePrice: 2000,
    quantity: 20,
  },
  {
    id: 'p3',
    name: 'Apple',
    purchasePrice: 100,
    salePrice: 500,
    quantity: 100,
  },
  {
    id: 'p4',
    name: 'Mango',
    purchasePrice: 5000,
    salePrice: 1000,
    quantity: 15,
  },
];
