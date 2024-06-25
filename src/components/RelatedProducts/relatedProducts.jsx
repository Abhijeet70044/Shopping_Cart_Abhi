import React from 'react'
import './relatedProducts.css'
import data_product from '../Assets/data';
import Item from '../Item/item';

const  RelatedProducts=()=> {
  return (
    <div className=' '>
        <h1>Related Products</h1>
        <hr />
        <div className='relatedproducts-items'>
            {data_product.map((item, i)=>{
                return <Item key={i} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price } />;
            })}
        </div>
    </div>
  )
}

export default RelatedProducts 