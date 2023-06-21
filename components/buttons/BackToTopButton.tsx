import { FC, useEffect, useState } from 'react'

interface BackToTopButtonProps {}

const BackToTopButton: FC<BackToTopButtonProps> = () => {
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-5 right-[10%] h-12 w-12 rounded-full border-2 border-black-codeleap
          bg-blue-codeleap text-white md:h-16 md:w-16"
          onClick={scrollUp}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-up h-auto w-full p-3"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      )}
    </>
  )
}
export default BackToTopButton
