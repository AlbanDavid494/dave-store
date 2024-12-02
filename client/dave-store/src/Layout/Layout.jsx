import React from 'react'

// components
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

// dependencies
import {Toaster} from 'react-hot-toast'

const Layout = ({children}) => {
  return (
    <>
     <Header />
     {children}
     <Footer /> 
     <Toaster
     position='bottom-right'
     reverseOrder={false}
     gutter={8}
     containerClassName=''
     toastOptions={{
      style: {
        backgroundColor: 'black',
        color: 'white',
      }
     }}
     />
    </>
  )
}

export default Layout
