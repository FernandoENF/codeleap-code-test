import { FC } from 'react'

interface InputProps {
  label: string
  placeholder: string
  className?: string
}

const Input: FC<InputProps> = ({ label, placeholder, className }) => {
  return (
    <fieldset className={className}>
      <label className="mb-2 block leading-none">{label}</label>
      <input
        className="w-full rounded-lg border border-light-black-codeleap p-2 text-sm
            placeholder-light-gray-codeleap"
        placeholder={placeholder}
      />
    </fieldset>
  )
}
export default Input
