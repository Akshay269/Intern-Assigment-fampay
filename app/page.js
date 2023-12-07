import Image from 'next/image'
import Navbar from '../app/navbar';
import HomePage from '../app/homepage';
import Trusted from '../app/trusted';
import Features from '../app/features';
import Setup from '../app/setup';
import Rewards from '../app/rewards';

export default function Home() {
  return (
    <main className='bg-[#0A0A0A] text-white'>
      <Navbar/>
      <HomePage/>
      <Trusted/>
      <Features/>
      <Setup/>
      <Rewards/>
    </main>
  )
}
