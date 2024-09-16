import Carousel from "./Components/carousel"
import Image from 'next/image';

export default function Home() {
  return (<>
    <main className="min-w-full min-h-screen flex justify-center items-center">
      <Image src="/jirafa2.png" alt="logo" layout="fill" objectFit="contain"  className="absolute z-[-50] bottom-0 opacity-30"/>
      <Carousel />
    </main>
  </>
  )
}
