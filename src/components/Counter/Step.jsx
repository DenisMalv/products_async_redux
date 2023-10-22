import { useDispatch, useSelector } from "react-redux";
import { setStep } from "redux/counter/counterSlice";
// import { setStep } from "redux/counter/actions";


const Step = ()=>{
    const {step} = useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    const handleSublit = (e) =>{
        e.preventDefault();
        const {value} = e.target.elements.step
        dispatch(setStep(+value))
    }

    return (
        <form onSubmit={handleSublit}>
            <input type="text" name="step" defaultValue={step}/>
            <button> set step </button>
        </form>
    )
}

export default Step