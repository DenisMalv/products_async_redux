import { useEffect, useState } from "react"

const { useDispatch, useSelector } = require("react-redux")
const { getNewsThunk, getNewsSearchThunk } = require("redux/news/thunk")



const News = ()=>{
    const [searchText,setSearchText] = useState('')
    const dispatch=useDispatch()

    const {news,status,error} = useSelector((store=>store.news))

    useEffect(()=>{
        dispatch(getNewsThunk())
    },[dispatch])

    // useEffect(()=>{
    //     if(!searchText) return
    //     dispatch(getNewsSearchThunk(searchText))
    // },[dispatch,searchText])

    return (
        <div>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>dispatch(getNewsSearchThunk(searchText))}>getSearchNewsThunk</button>
            <ul>
                {
                  news &&  news.map(el=><li>{el.author}</li>)
                }
            </ul>
        </div>
    )
}

export default News