import { createFileRoute } from "@tanstack/react-router"
import Hero from "@/components/landing/Hero"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main>
      <div className="items-center justify-items-center h-full w-full p-0 m-0 sm:p-0 sm:m-0 w-[98%] lg:w-full relative top-0 flex flex-col gap-24">
        <Hero className="my-48" />
      </div>
    </main>
  )
}
