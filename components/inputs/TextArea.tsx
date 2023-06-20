import { FC } from 'react'

interface TextAreaProps {
  label: string
  placeholder: string
  className?: string
}

const TextArea: FC<TextAreaProps> = ({ label, placeholder, className }) => {
  return (
    <fieldset className={className}>
      <label className="mb-2 block leading-none">{label}</label>
      <textarea
        className="h-[74px] w-full resize-none rounded-lg border border-light-black-codeleap
            p-2 text-sm placeholder-light-gray-codeleap"
        placeholder={placeholder}
      />
    </fieldset>
  )
}
export default TextArea
