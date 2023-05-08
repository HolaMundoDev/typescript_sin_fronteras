import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

type UserFormState = {
  name: string;
  lastName: string;
}

const Initialvalue: UserFormState = {
  name: '',
  lastName: ''
}

export default function UserForm(){
  const [form, setForm] = useState(Initialvalue)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormState;
    setForm({...form, [name]: e.target.value})
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(form)
  }

  return (
    <>
      <Input name="name" placeholder="Nombre" handleChange={handleChange}/>
      <Input name="lastname" placeholder="Apellido" handleChange={handleChange}/>
      <Button handleClick={handleClick}>Hola Mundo</Button>
    </>
  )
}