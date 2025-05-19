import { useFormStatus } from "react-dom"

export const SubmitButton = () => {
    //solo es necesario que este componente sea el descendiente de un formulario
    const status = useFormStatus();
    
  return (
     <button
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 text-white p-2 rounded flex-1 sm:flex-none"
        disabled={status.pending}
      >
        Agregar planeta
      </button>
  )
}
