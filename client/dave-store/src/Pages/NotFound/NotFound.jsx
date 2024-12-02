import React from 'react'
import { HiBookOpen, HiBookmarkSquare, HiMiniQueueList, HiRss } from 'react-icons/hi2';
import { LuChevronRight } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';
import LinkButton from './LinkButton'


const Link = [
  {
  name: 'Product',
  href: '/products',
  description: 'You will find all available products here.',
  icon: HiBookOpen,
  },
  {
  name: 'Shop',
  href: '/products',
  description: 'Maximum collections of shopping products.',
  icon: HiMiniQueueList,
  },
  {
  name: 'My Account',
  href: '/profile',
  description: 'Find your information here.',
  icon: HiBookmarkSquare,
  },
  {
  name: 'Blog',
  href: '/blog',
  description: 'Read our latest news and articles on shopping.',
  icon: HiRss,
  },
  ];

const NotFound = () => {

const {pathname} = useLocation()
const path = pathname.split('/').filter(Boolean).pop()


  return (
    <section className='container bg-white'>

<div className='px-6 pb-16 pt-10 sm:pb-24 lg:px-8'>

  <div className='text-center'>
  <p className="text-4xl font-bold leading-8 ">404</p>
  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-500">
<span className="text-red-500 underline underline-offset-2 decoration-[1px] capitalize">
{path}
</span>{' '}
does not exist

<p className="mt-2 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
Sorry, we couldn't find the {path} page you're looking for.
</p>
</h1>
  </div>

  <div className="mx-auto mt-6 flow-root max-w-lg">
<h2 className="sr-only">Popular pages</h2>
<ul
role="list"
className="divide-y div-gray-900/5 border-b border-gray-900/5 flex flex-col">
{Link.map((link, linkIndex) => {
const {} = link;
return (
<li
key={linkIndex}
className="relative flex gap-x-6 py-4 hover:bg-skyText/20 px-4 rounded-md">
<div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
<link.icon
className="h-6 w-6 text-skyText"
aria-hidden="true"
/>
</div>
<div className="flex-auto">
<h3 className="text-sm font-semibold leading-6 text-gray-900">
<a href={link.href}>
<span className="absolute inset-0" aria-hidden="true" />
{link.name}
</a>
</h3>
<p className="mt-2 text-sm leading-6 text-gray-600">
{link.description}
</p>
</div>
<div className="flex items-center ml-auto">
<LuChevronRight
 className="h-5 w-5 text-gray-400"
 aria-hidden="true" />
</div>
</li>
);
})}
</ul>
<div className="mt-5 flex justify-center">
 <LinkButton showButton={true} link={"/"} />
 </div>
</div>

</div>
     
    </section>
  )
}

export default NotFound