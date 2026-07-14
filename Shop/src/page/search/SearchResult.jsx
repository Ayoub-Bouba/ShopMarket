import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../../components/PageTransition';
import SlideProductLoading from '../../components/slideProduct/SlideProductLoading';
import Product from '../../components/slideProduct/Product';

function SearchResult() {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const query = new URLSearchParams(useLocation().search).get("query");
    useEffect(() => {
        const fetchResult = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`
                )
                const data = await res.json();
                setResult(data.products || [])
            }
            catch (error) { console.error(error) }
            finally {
                setLoading(false)
            }
        }
        if (query) fetchResult();
    }, [query])
    return (
        <PageTransition key={query}>
            <div className='category_prduct'>
                {loading ? (
                    <SlideProductLoading key={query} />
                ) : result.length > 0 ? (
                    <div className="container">
                        <div className="top_slide">
                            <h2>Results For : {query}</h2>
                        </div>
                        <div className="products">
                            {result.map((item, index) => (
                                <Product items={item} key={index} />
                            ))}
                        </div>
                    </div>
                ):(
                    <div className="container">
                        <p>No Results Found </p>
                    </div>
                )}

            </div>
        </PageTransition>
    )
}

export default SearchResult