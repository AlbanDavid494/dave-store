import React from 'react'

const Label = ({title, htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className='block text-sm font-meidum left-6 text-white'>
      {title}
    </label>
  )
}

export default Label
