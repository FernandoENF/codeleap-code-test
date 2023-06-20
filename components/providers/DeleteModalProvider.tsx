import { createContext, FC, ReactNode, useState } from 'react'

export const DeleteModalContext = createContext({
  isOpen: false,
  setIsOpen: () => {
    console.log('undefined')
  },
} as { isOpen: boolean; setIsOpen: Function })

interface DeleteModalProviderProps {
  children: ReactNode
}

export const DeleteModalProvider: FC<DeleteModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <DeleteModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DeleteModalContext.Provider>
  )
}
