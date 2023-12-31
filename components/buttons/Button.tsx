import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
  variant: 'primary' | 'success' | 'danger' | 'secondary'
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        className,
        `block rounded-lg
        px-[30px] py-[7px] font-bold transition-colors duration-100`,
        disabled
          ? 'bg-black-codeleap text-white'
          : {
              'bg-blue-codeleap text-white hover:bg-blue-700':
                variant === 'primary',
              'bg-red-codeleap text-white hover:bg-red-700':
                variant === 'danger',
              'bg-green-codeleap text-white hover:bg-green-700':
                variant === 'success',
              'border border-black-codeleap bg-white text-black hover:bg-gray-200':
                variant === 'secondary',
            },
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button
