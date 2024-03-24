import Footer from '@/components/Footer/Footer';
import Service from '@/components/Services/Service';
import Mission from '@/components/Mission/Mission';
import Hero from '@/components/Hero/Hero';
import AboutHero from '@/components/AboutHero/AboutHero';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutHero />
      <Mission />
      {/* <section className=' text-white h-screen bg-black text-center flex'>
        <h1 className='font-bold'>News</h1>
      </section> */}
      <Service />
      <Footer/>  
    </div>
  );
}
