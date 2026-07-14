import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProduct/Product'
import './categoryPage.css'
import SlideProductLoading from '../../components/slideProduct/SlideProductLoading'
import PageTransition from '../../components/PageTransition'
function CategoryPage() {
    const { category } = useParams()
    const [categoryProduct, setCategoryProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProduct(data)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [category])
    console.log(categoryProduct)
    return (

        <PageTransition key={category}>
            <div className='category_prduct'>
                {loading ? (
                    <SlideProductLoading key={category} />
                ) : (
                    <div className="container">
                        <div className="top_slide">
                            <h2>{category.replace("-", " ")} : {categoryProduct.limit}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qui.</p>
                        </div>
                        <div className="products">
                            {categoryProduct.products.map((item, index) => (
                                <Product items={item} key={index} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </PageTransition>
    )
}

export default CategoryPage