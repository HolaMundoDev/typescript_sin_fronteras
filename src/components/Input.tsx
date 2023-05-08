import { ChangeEventHandler } from 'react';

interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ placeholder, handleChange }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}