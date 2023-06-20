import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import TextArea from '@/components/inputs/TextArea'
import MainLayout from '@/components/layouts/MainLayout'
import { useState } from 'react'
import EditPostModal from '@/components/modals/EditPostModal'
import DeletePostModal from '@/components/modals/DeletePostModal'

export default function Main() {
  const [edit, setEdit] = useState<boolean>(false)
  const [remove, setRemove] = useState<boolean>(false)

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
            {/* Post */}
            <article className="overflow-hidden rounded-2xl border border-black-codeleap">
              {/* Post Header */}
              <header className="flex w-full justify-between bg-blue-codeleap p-6 text-white">
                <h3 className="text-[22px] font-bold">
                  My First Post at CodeLeap Network!
                </h3>
                <div className="space-x-9">
                  {/* Remove button */}
                  <button
                    onClick={() => {
                      setRemove(true)
                    }}
                  >
                    <svg
                      width="32"
                      height="30"
                      viewBox="0 0 32 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.80087 23.75C7.80087 25.125 8.971 26.25 10.4011 26.25H20.8023C22.2324 26.25 23.4025 25.125 23.4025 23.75V8.75H7.80087V23.75ZM10.9992 14.85L12.8324 13.0875L15.6017 15.7375L18.358 13.0875L20.1912 14.85L17.4349 17.5L20.1912 20.15L18.358 21.9125L15.6017 19.2625L12.8454 21.9125L11.0122 20.15L13.7685 17.5L10.9992 14.85ZM20.1522 5L18.852 3.75H12.3514L11.0512 5H6.50073V7.5H24.7027V5H20.1522Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  {/* Edit button */}
                  <button
                    onClick={() => {
                      setEdit(true)
                    }}
                  >
                    <svg
                      width="32"
                      height="30"
                      viewBox="0 0 32 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.10095 21.2663L14.8385 21.2475L27.3614 9.3225C27.8528 8.85 28.1233 8.2225 28.1233 7.555C28.1233 6.8875 27.8528 6.26 27.3614 5.7875L25.2994 3.805C24.3165 2.86 22.6016 2.865 21.6265 3.80125L9.10095 15.7288V21.2663ZM23.461 5.5725L25.5269 7.55125L23.4506 9.52875L21.3886 7.5475L23.461 5.5725ZM11.7012 16.7713L19.5411 9.305L21.6031 11.2875L13.7645 18.7513L11.7012 18.7575V16.7713Z"
                        fill="white"
                      />
                      <path
                        d="M6.50067 26.25H24.7026C26.1367 26.25 27.3029 25.1288 27.3029 23.75V12.915L24.7026 15.415V23.75H10.6065C10.5727 23.75 10.5376 23.7625 10.5038 23.7625C10.4609 23.7625 10.418 23.7513 10.3738 23.75H6.50067V6.25H15.4027L18.003 3.75H6.50067C5.06661 3.75 3.90039 4.87125 3.90039 6.25V23.75C3.90039 25.1288 5.06661 26.25 6.50067 26.25Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </header>
              {/* Post Body */}
              <div className="space-y-8 p-6">
                {/* Author and Date Published */}
                <div className="flex justify-between text-light-black-codeleap">
                  <span className="font-bold">@Victor</span>
                  <time
                    className="font-bold"
                    dateTime={'datetime'}
                    itemProp="datePublished"
                  >
                    45 minutes ago
                  </time>
                </div>

                {/* Text Content */}
                <p className="text-start text-lg">
                  Curabitur suscipit suscipit tellus. Phasellus consectetuer
                  vestibulum elit. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas.
                  Maecenas egestas arcu quis ligula mattis placerat. Duis vel
                  nibh at velit scelerisque suscipit. Duis lobortis massa
                  imperdiet quam. Aenean posuere, tortor sed cursus feugiat,
                  nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
                  lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia
                  erat.
                </p>
              </div>
            </article>
          </div>
        </section>
        <EditPostModal isOpen={edit} setIsOpen={setEdit} />
        <DeletePostModal isOpen={remove} setIsOpen={setRemove} />
      </MainLayout>
    </RootLayout>
  )
}
