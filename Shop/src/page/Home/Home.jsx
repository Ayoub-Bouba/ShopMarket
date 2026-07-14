import React from 'react'
import { useEffect, useState } from 'react';
import HeroSlider from '../../components/HeroSlider'
import SlideProduct from '../../components/slideProduct/SlideProduct'
import './Home.css'
import SlideProductLoading from '../../components/slideProduct/SlideProductLoading';
import PageTransition from '../../components/PageTransition';
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "mens-watches",
  "sports-accessories"
]
function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return { [category]: data.products }
          }
          ))
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      }
      catch (error) {
        console.error("error feching", error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchProduct()
  }, [])
  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {loading ? (
          categories.map((category) => (
            <SlideProductLoading key={category} />
          ))
        ) : (
          categories.map((category) => (
            <SlideProduct key={category} data={products[category]} title={category.replace("-", " ")} />
          ))
        )}

      </div>
    </PageTransition>
  )
}

export default Home