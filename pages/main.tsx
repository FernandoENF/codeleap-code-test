import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import TextArea from '@/components/inputs/TextArea'
import MainLayout from '@/components/layouts/MainLayout'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditPostModal from '@/components/modals/EditPostModal'
import DeletePostModal from '@/components/modals/DeletePostModal'
import { EditModalContext } from '@/components/providers/EditModalProvider'
import { DeleteModalContext } from '@/components/providers/DeleteModalProvider'
import PostCard from '@/components/cards/PostCard'

export default function MainPage() {
  return (
    <RootLayout>
      <MainLayout>
        <section className="space-y-6 bg-white p-6">
          <form
            className="space-y-6 rounded-[16px] border border-black-codeleap
          p-6"
          >
            <h2 className=" text-[22px] font-bold">What’s on your mind?</h2>
            <Input label={'Title'} placeholder={'Hello World'} />
            <TextArea label={'Content'} placeholder={'Content here'} />
            <Button variant={'primary'} className="ml-auto">
              Create
            </Button>
          </form>
          {/* List of Posts */}
          <div>
            <PostCard />
          </div>
        </section>
      </MainLayout>
    </RootLayout>
  )
}
