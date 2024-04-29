'use client';

import { Table } from 'antd';
import React from 'react';

import { productTableColumns } from '@/app/config/product';

interface ProductTableProps {
  data?: ProductDataType[];
}
const ProductTable: React.FC<ProductTableProps> = ({ data }) => (
  <Table columns={productTableColumns} dataSource={data} />
);

export default ProductTable;
