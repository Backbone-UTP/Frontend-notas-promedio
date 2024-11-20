import Carousel from "./Components/carousel"
import Image from 'next/image';

export default function Home() {
  return (
  <>
    <main className="relative min-w-full min-h-screen flex justify-center items-center">
      <Image src="/jirafa2.png" alt="logo" fill priority className=" z-[-50] bottom-0 opacity-30 object-contain max-sm:hidden"/>
      <Carousel />
    </main>
  </>
  )
}
