import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeHeader/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image 
          width={300}
          height={100}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt=''
        />
        <HomeSearch />
      </div>
    </>
  )
}
