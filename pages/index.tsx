import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'

export default function Signup() {
  return (
    <RootLayout>
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
