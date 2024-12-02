import React from 'react'
// import image
import BannerImg from '../../assets/Banner/banner.jpg';
// import icon
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import Container from '../Container/Container';

const Banner = () => {
  return (
    <section className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

{/* image div */}
<div data-aos="zoom-in">
<img
src={BannerImg}
alt=""
className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
/>
</div>
{/* image div end here */}

{/* text details div */}
<div className="flex flex-col justify-center gap-6 sm:pt-0">
<h1 className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% off</h1>
<p data-aos='fade-up' className="text-sm text-gray-500 tracking-wide leading-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem at sit provident dicta
tenetur non officiis modi cupiditate natus!
</p>

<div className="flex flex-col gap-4">
<div
data-aos="fade-up"
className="flex items-center gap-4">
<GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
<p>Quality Products</p>
</div>
<div
data-aos="fade-up"
className="flex items-center gap-4">
<IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
<p>Fast Delivery</p>
</div>
<div
data-aos="fade-up"
className="flex items-center gap-4">
<GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
<p>Easy Payment method</p>
</div>
<div
data-aos="fade-up"
className="flex items-center gap-4">
<GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
<p>Get Offers</p>
</div>
</div>

</div>
{/* text details div ends here */}
</div>  
        </Container>
      
    </section>
  )
}

export default Banner