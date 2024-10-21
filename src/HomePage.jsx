import React from 'react'
import ProductPage from './ProductPage'; 
import data from './assets/products.json'
export default function HomePage() {
    const [products] = useState(data);
  
    return (
      <div>
        {products.map((product) => (
          <div key={each.id}>
            <ProductPage product={product}/>

          </div>
        ))}
      </div>
    )
}
