import React from 'react'

const Footer = () => {
  return (
    <footer className=' mt-8 border z-10 border-t-[#b0b86d] bg-amber-900
     border-l-transparent border-r-transparent text-white'>
        <div className=' container p-12  justify-between
         flex flex-col items-center gap-4 md:gap-0 md:flex-row'>
            <div className=' text-lime-600 text-2xl md:text-3xl font-black cursor-pointer'>
                PORTFOLIO <span className='text-primary'>.</span>
            </div>
            <p className='text-amber-100 text-sm md:text-base'>Guided by: Er.Chandan Kumar Sahoo</p>
        </div>

    </footer>
  )
}

export default Footer
