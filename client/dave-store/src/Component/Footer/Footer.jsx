import React from 'react'
// icon
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';


// image
import Banner from '../../assets/Footer-Images/footer-pattern.jpg'
import FooterLogo from '../../assets/Footer-Images/logo.png'

const Footer = () => {

  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    };

// links
const FooterLinks = [
  {
  title: 'Home',
  link: '/#',
  },
  {
  title: 'About',
  link: '/about',
  },
  {
  title: 'Contact',
  link: '/contact',
  },
  {
  title: 'Blog',
  link: '/blog',
  },
  ];


  return (
    <footer className='text-white' style={BannerImg}>
      
      <div className='container'>

        <div className='grid md:grid-cols-3 pb-44 pt-5'>

<div className='py-8 px-4'>
  <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>

<img src={FooterLogo} alt="logo" className='max-w-[50px]' />
Dave Store
  </h1>

  <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet magnam tenetur. Molestias,
itaque minima veniam quisquam asperiores recusandae animi.
</p>
</div>

{/* footer links  */}
<div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
<div>
<div className="py-8 px-4">

<h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>

<ul className="flex flex-col gap-3">
{FooterLinks.map((link) => (
<li
key={link.title}
className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200">
<span>{link.title}</span>
</li>
))}
</ul>

</div>
</div>

<div>
<div className="py-8 px-4">
<h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
<ul className="flex flex-col gap-3">
{FooterLinks.map((link) => (
<li
className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
key={link.title}>
<span>{link.title}</span>
</li>
))}
</ul>
</div>
</div>

{/* social links */}
<div>
<div className="flex items-center gap-3 mt-6">
<a href="#">
<FaInstagram className="text-3xl" />
</a>
<a href="#">
<FaFacebook className="text-3xl" />
</a>
<a href="#">
<FaLinkedin className="text-3xl" />
</a>
</div>
<div className="mt-6">
<div className="flex items-center gap-3">
<FaLocationArrow />
<p>Noida, Uttar Pradesh</p>
</div>
<div className="flex items-center gap-3 mt-3">
<FaMobileAlt />
<p>+91 123456789</p>
</div>
</div>
</div>
{/* social links ends here */}
</div>
{/* footer links ends here */}

      </div>

      </div>

    </footer>
  )
}

export default Footer
