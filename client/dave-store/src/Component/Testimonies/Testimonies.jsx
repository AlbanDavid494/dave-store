import React from 'react'
import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import Container from '../Container/Container';

const Testimonies = () => {

    const TestimonialData = [
        {
          id: 1,
          name: "Victor",
          text: "I was blown away by quality of the clothing from Dave Store. The attention to detail and the materials used are superb. I've never been disapointed with a prurchse, and i highly recommend this company to anyone looking for a good clothing",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 2,
          name: "Satya Nadella",
          text: "I had a issue with my order, but the customer service team at Dave Store was incredibly helpful and responsive. they resolved te isuue promptly, and i was impressed by their dedication to customer satisfaction.",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 3,
          name: "Virat Kohli",
          text: "I had a issue with my order, but the customer service team at Dave Store was incredibly helpful and responsive. they resolved te isuue promptly, and i was impressed by their dedication to customer satisfaction.",
          img: "https://picsum.photos/104/104",
        },
        {
          id: 5,
          name: "Sachin Tendulkar",
          text: "I had a issue with my order, but the customer service team at Dave Store was incredibly helpful and responsive. they resolved te isuue promptly, and i was impressed by their dedication to customer satisfaction.",
          img: "https://picsum.photos/103/103",
        },
      ];

    //   setting from react slick
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <section className='py-10 mb-10'>
        <Container>
            {/* header section start here */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
    <p data-aos='fade-up' className='text-sm text-primary'>What our customers are saying</p>
<h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1>
<p className='text-xs text-gray-400 lg:pt-3' >Don't just take our word for it! Our customer have experienced real results and benefits from our products / services.  We are Proud of the impact we've made in te lives of our customers. Here is what they say</p>
</div>
            {/* header section end here */}
            {/* testimonial card starts here */}
           <div data-aos='zoom-in'>
            <Slider {...settings}>
            {
    TestimonialData.map((data => (
      <div className='my-6'>
<div key={uuidv4()}
className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
>
<div className='mb-4'>
    <img src={data.img} alt="img"
    className='rounded-full w-20 h-20'
    />
</div>

<div className='flex flex-col items-center gap-4'>

<div className='space-y-3'>
<p className='text-xs text-gray-500' >{data.text}</p>
<h1 className='text-xl font-bold text-black/80 dark:text-light' >{data.name}</h1>
</div>

</div>
<p className='text-black/20 text-9xl font-serif absolute top-0 right-0' >,,</p>

</div>
      </div>
    )))
}
            </Slider>
           </div>
            {/* testimonial card ends here */}
        </Container>
      
    </section>
  )
}

export default Testimonies
