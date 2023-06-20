import { createContext, FC, ReactNode, useState } from 'react'

export const EditModalContext = createContext(
  {} as { isOpen: boolean; setIsOpen: Function },
)

interface EditModalProviderProps {
  children: ReactNode
}

export const EditModalProvider: FC<EditModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <EditModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </EditModalContext.Provider>
  )
}
