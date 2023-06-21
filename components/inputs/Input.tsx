import { FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  className?: string
  register: UseFormRegister<any>
  name: string
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  className,
  register,
  name,
  ...rest
}) => {
  return (
    <fieldset className={className}>
      <label className="mb-2 block leading-none">{label}</label>
      <input
        className="w-full rounded-lg border border-light-black-codeleap p-2 text-sm
            placeholder-light-gray-codeleap"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </fieldset>
  )
}
export default Input
