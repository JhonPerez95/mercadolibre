import { useState } from 'react'

const useForm = (initialState: any) => {
  const [value, setValue] = useState(initialState)

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [target.name]: target.value })
  }

  const resetInput = () => {
    setValue(initialState)
  }

  return { value, handleInputChange, resetInput }
}

export default useForm
