import { ChangeEventHandler } from 'react';

interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>
  name: string;
}

export default function Input({ placeholder, handleChange, name }: InputProps) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}