export default function Home() {
  return (
    <section className="flex h-full w-full items-center justify-center bg-gray-codeleap">
      <div className="rounded-lg bg-white p-6">
        <h1 className="mb-6 text-[22px] font-bold">
          Welcome to CodeLeap network!
        </h1>
        <div className="mb-4">
          <label className="mb-2 block leading-none">
            Please enter your username
          </label>
          <input
            className="w-full rounded-lg border border-[#777777] p-2 text-sm
            placeholder-light-gray-codeleap"
            placeholder="John Doe"
          />
        </div>
        <button
          className="ml-auto block rounded-md bg-blue-codeleap
        px-[30px] py-[7px] font-bold text-white"
        >
          ENTER
        </button>
      </div>
    </section>
  )
}
