import { useSelector,useDispatch } from "react-redux";
import Step from "./Step";
import { decrement, increment } from "redux/counter/counterSlice";
// import { decrement, increment } from "redux/counter/actions";


const Counter = ()=>{
    // const [total,setTotal] = useState(0)

    const {total, step} = useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    const handlePlus = ()=> dispatch(increment(step))
    const handleDecimal = ()=> dispatch(decrement(step))


    return (
        <div style={{padding:"100px",}}>
            <Step/>
            <div>
                <button className='inc' onClick={handlePlus}>+</button>
                <button className='dec' onClick={handleDecimal}>-</button>
            </div>
            <p className="total">{total}</p>
        </div>
    )
}

export default Counter