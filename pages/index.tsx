import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { enterUsername } from '@/actions/userActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()

  const dispatch = useDispatch()

  const { register, handleSubmit, watch } = useForm<{ username: string }>({
    defaultValues: {
      username: '',
    },
  })

  const handleEnterUsername = useCallback(
    (username: string) => {
      dispatch(enterUsername(username))
    },
    [dispatch],
  )
  const onSubmit: SubmitHandler<{ username: string }> = (data) => {
    const { username } = data
    handleEnterUsername(username)
    router.push('/main')
  }

  const disabled = watch('username') === ''

  return (
    <RootLayout>
      <div className="rounded-2xl bg-white p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-6 text-[22px] font-bold">
            Welcome to CodeLeap network!
          </h1>
          <Input
            register={register}
            label={'Please enter your username'}
            placeholder={'John Doe'}
            className={'mb-4'}
            name={'username'}
          />
          <Button variant="primary" className="ml-auto" disabled={disabled}>
            ENTER
          </Button>
        </form>
      </div>
    </RootLayout>
  )
}
