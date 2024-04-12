import { useRef } from "react"
import { setTrainer } from "../../store/states/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch() 

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')

    }

  return (
    <form 
    className="z-10 -mt-32"
    onSubmit={handleSubmit}>
      <input 
        ref={trainerInput} 
        type="text" 
        className="pl-4 outline-none flex-1 w-96 h-10 rounded-full m-5 -mt-5"
        placeholder="Your Name"
      />
      <button
      className="bg-red-500 h-10 w-24 rounded-full text-slate-100"
      >Lets Start
      
      </button>
    </form>
  )
}

export default FormTrainer
