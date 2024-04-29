'use client';

import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';

import { productData as data } from '@/app/config/product';
import { ProductDataType } from '../../../models/product';
import ProductTable from './_content/table/product-table';

const { Search } = Input;
export default function Products() {
  const [productData, setProductData] = useState<ProductDataType[]>(data);
  const handleSearch = (value: string) => {
    const filteredData = data.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
    setProductData(filteredData);
  };
  return (
    <>
      <Row justify={'space-between'}>
        <Col>
          <Search placeholder="input search text" onSearch={handleSearch} enterButton />
        </Col>
        <Col>
          <Button type="primary">Add New Product</Button>
        </Col>
      </Row>
      <br />
      <ProductTable data={productData} />
    </>
  );
}
