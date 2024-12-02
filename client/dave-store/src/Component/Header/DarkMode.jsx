import React, {useEffect, useState} from 'react'
import LightModeBtnPng from '../../assets/DarkMode/light-mode-button.png'
import DarkModeBtnPng from '../../assets/DarkMode/dark-mode-button.png'

const DarkMode = () => {
    // logic
// using useState to keep track of both the light and dark mode
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )
    // targetting the html element
    const element = document.documentElement

    useEffect(() => {
        if(theme === 'dark'){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [theme])

  return (
    <section className='relative'>
    {/* light mode button image starts here */}
<img src={LightModeBtnPng} alt="img" className={` w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
/>
{/* light mode button image ends here */}

{/* dark mode button image starts here */}
<img src={DarkModeBtnPng} alt="img" className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' 
onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
/>
{/* dark mode button image starts here */}

</section>
  )
}

export default DarkMode
