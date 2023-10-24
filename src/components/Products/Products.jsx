import { getProducts } from "API/productsAPI"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsSelector } from "redux/products/selectors"
import { createProductsThunk, deleteProductsThunk, getProductsThunk } from "redux/products/thunk"



const Products = ()=>{

    const {products, error, isLoading} = useSelector(productsSelector)
    const dispatch = useDispatch()


    const sortedProducts = [...products].sort((a,b)=>a.price - b.price)
    console.log(sortedProducts)
    useEffect(()=>{
        dispatch(getProductsThunk())
    },[dispatch])


    // useEffect(()=>{
    //     const as = async ()=>{
    //         const res = await getProducts()
    //         console.log(res)   
    //     }
    //     as()
    // },[])

    return (
        <>
            {
                isLoading && <div>Loading ..... </div>
            }
            {
                products && 
                <div>
                    <ul className="list">
                    {
                        sortedProducts.map(el=><li className="item">
                            <img src={el.images[0]} />
                            <div className="item-container">
                                <h5 className="item-title">Title: {el.title}</h5>
                                <p className="item-price">Price: {el.price}</p>
                                <p className="item-descr">Desctiption: {el.description}</p>
                                <button className="item-button" onClick={()=>dispatch(deleteProductsThunk(el.id))}>Delete</button>
                            </div>
                            </li>)
                    }
                    </ul>

                </div>

            }
            {
                error && <h2>Error : {error?.message}</h2>
            }
        </>
    )
}


export default Products