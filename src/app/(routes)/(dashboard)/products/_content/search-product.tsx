import { Input } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';

import { ProductDataType } from '@/app/models/product';

const { Search } = Input;
const SearchProduct = ({
  data,
  setProductData,
}: {
  data: ProductDataType[];
  setProductData: Dispatch<SetStateAction<ProductDataType[]>>;
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredData = data.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
    setProductData(filteredData);
  };
  return (
    <>
      <Search placeholder="Search Product Name" onChange={handleSearch} enterButton />
    </>
  );
};

export default SearchProduct;
