import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { enterUsername } from '@/actions/userActions'
import { IState } from '@/redux/store'

export default function Signup() {
  const dispatch = useDispatch()

  const username = useSelector<IState, string>((state) => state.user.username)

  const handleEnterUsername = useCallback(
    (username: string) => {
      dispatch(enterUsername(username))
    },
    [dispatch],
  )

  return (
    <RootLayout>
      {username}
      <div className="rounded-2xl bg-white p-6">
        <h1 className="mb-6 text-[22px] font-bold">
          Welcome to CodeLeap network!
        </h1>
        <Input
          label={'Please enter your username'}
          placeholder={'John Doe'}
          className={'mb-4'}
        />
        <Button variant="primary" className="ml-auto">
          ENTER
        </Button>
      </div>
    </RootLayout>
  )
}
