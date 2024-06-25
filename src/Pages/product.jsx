import React, { useContext } from 'react'
import './style/product.css';
import { ShopContext} from '../Context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/breadcrums';
import ProductDisplay from '../Components/ProductDisplay/productDisplay';
import DescriptionBox from '../Components/DescriptionBox/descriptionBox';
import RelatedProducts from '../Components/RelatedProducts/relatedProducts';

const Product = ()=> {
  const {all_product } = useContext(ShopContext);
  const { product } = useParams();
  const productData = all_product.find((e) => e.id === Number(product));
  return (
    <div>
      <Breadcrums product={productData} />
      <ProductDisplay product={productData} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product