'use client';

import { Button, Col, Row } from 'antd';
import { useState } from 'react';

import { productData as data } from '@/app/config/product';
import { ProductDataType } from '../../../models/product';
import ProductTable from './_content/product-table';
import SearchProduct from './_content/search-product';

export default function Products() {
  const [productData, setProductData] = useState<ProductDataType[]>(data);

  return (
    <>
      <Row justify={'end'}>
        <Col>
          <Button type="primary">Add New Product</Button>
        </Col>
      </Row>
      <br />
      <Row justify={'end'}>
        <Col>
          <SearchProduct data={productData} setProductData={setProductData} />
        </Col>
      </Row>
      <br />
      <ProductTable data={productData} />
    </>
  );
}
