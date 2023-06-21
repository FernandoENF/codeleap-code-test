import { FC, TextareaHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  placeholder: string
  className?: string
  name: string
  register: UseFormRegister<any>
}

const TextArea: FC<TextAreaProps> = ({
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
      <textarea
        className="h-[74px] w-full resize-none rounded-lg border border-light-black-codeleap
            p-2 text-sm placeholder-light-gray-codeleap"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </fieldset>
  )
}
export default TextArea
