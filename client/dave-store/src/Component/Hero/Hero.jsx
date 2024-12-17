import React from 'react'
import {Link} from 'react-router-dom'
// images
import Image1 from '../../assets/Hero/women.png';
import Image2 from '../../assets/Hero/shopping.png';
import Image3 from '../../assets/Hero/sale.png';
import Container from '../Container/Container';

// carousel react slick
import Slider from "react-slick";
import { v4 as uuidv4 } from 'uuid';


    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: true
    // };

const Hero = () => {

// array of objects
const ImageList = [
    {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
    "High-quality men's clothing, Our mission is to provide you with the latest fashion trends explore now!"
    },
    {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
    "Discover our collection of Women'clothing, designes to keep you looking sharp and feeling confident. We believe that fashion should be accesible, affordable and enjoyable.",
    },
    {
    id: 3,
    img: Image3,
    title: '70% off on all Products Sale',
    description:
    'Elevate your wardobe with our collection of stylish tops, from casual tees to dress shirts. Find the perfect fit with our range of shirt, jewelries and accessorie',
    },
    ];
    
    // custom settings for slick carousel starts here
    var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    };
    
    // custom settings for slick carousel ends here

    return (

        <section className='relative dark:bg-gray-950 overflow-hidden dark:text-white bg-gray-100 min-h-[550px] sm:min-h-[650px] duration-200 '>

<div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

    <Slider {...settings} className=' h-[500px] relative'>
             {ImageList.map((data) => (
<div key={uuidv4()}>
<div className="grid grid-cols-1 sm:grid-cols-2">
{/* text content div starts here */}
<div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:oder-1 relative z-10 lg:ml-8 lg:mt-20 sm:mb-4" >
<h1
data-aos='zoom-out'
data-aos-duration='500'
data-aos-once='true'
className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
<p 
data-aos='fade-up'
data-aos-duration='500'
data-aos-delay='100'
className="text-sm">{data.description}</p>
<div
data-aos='fade-up'
data-aos-duration='500'
data-aos-delay='300'
>
    <Link to={'/products'}>
<button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 sm:my-3 rounded-full">
Order Now
</button>
</Link>
</div>
</div>
{/* text content div ends here */}

{/* image div starts here */}
<div className="oder-1 sm:order-2 lg:mt-20">
<div 
data-aos='zoom-in'
data-aos-once='true'
className="relative z-10">
<img
src={data.img}
alt="img"
className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
/>
</div>
</div>
{/* image div ends here */}
</div>
</div>
))}     
    </Slider>
        </section>
        // <Container>
//         <section className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 
//         dark:bg-gray-950 flex justify-center items-center
//         dark:text-white duration-200 lg:py-10">

//         {/* background pattern starts here */}
//          {/* <div className="h-[700px] w-[700px] bg-primary/40 absolute right-0 -top-16 rounded-3xl rotate-45 -z[8]"></div> */}
//         {/* background pattern ends here */}

//         <section className='pb-8 sm:pb-0'>

       
            
//              {/* <Slider {...settings} > */}
//            {/* {ImageList.map((data) => ( */}
//             {/* // <div key={uuidv4()}> */}
// {/* <div className='grid grid-cols-1 sm:grid-cols-2'> */}

//     {/* text content div starts here */}
//     {/* <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:oder-1 relative z-10'>
//         <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' >{data.title}</h1>
//     <p>{data
//         .description}</p>
//         <div>
//         <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
// Order Now
// </button>
//         </div>
//     </div> */}
//     {/* text content div stops here */}

//     {/* image div starts here */}
//     {/* <div className='order-1 sm:order-2'>
//         <div className='relative z-10'>
// <img src={data.img}
// className='w-[300px] h-[300px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto'
// />
//         </div>
//     </div> */}
//     {/* image div ends here */}

// {/* </div> */}
//             {/* </div> */}
//            {/* ))} */}
//             {/* </Slider>  */}
//         </section>
       
//         </section>
        // </Container>
    )
}

export default Hero