import React from 'react'
import Logo from '../assets/logo.png'

export const Contact = () => {
  return (
    <div id='contact' className='h-[80vh] flex'>
        <div className='flex flex-col-reverse md:flex-row container mx-auto justify-around items-center md:before:w-12 before:h-12 before:bg-[#863316] before:absolute before:rounded-full before:top-[360vh] before:left-10 before:z-[-1] md:after:w-20 after:h-20 after:bg-[#863116] after:absolute after:rounded-full after:top-[400vh] after:right-12 after:z-[-1]'>
            <div className='flex flex-col gap-5 w-[40vh] text-center before:h-4 md:before:w-4 before:bg-[#863316] before:rounded-full before:absolute before:top-[420vh] before:z-[-1] after:w-8 after:h-8 after:bg-[#863316] after:rounded-full after:absolute after:left-[40%] after:top-[370vh] after:z-[-1]'>
                <div className='font-bold text-2xl'>
                    <h1>kontak kami disini!</h1>
                </div>
                <a className='flex justify-center' target="_blank" href="https://wa.me/6281936533008?text=Halo%2C%20saya%20mau%20membeli%20tahu%20gejrot%21">
                    <div className='bg-[#863316] px-5 py-4 rounded-md text-white hover:bg-black duration-150'>
                        <h1 className='hover:scale-105 duration-150'>Kontak Stella</h1>
                    </div>
                </a>
                <a className='flex justify-center' target="_blank" href="https://wa.me/6283115706582?text=Halo%2C%20saya%20mau%20membeli%20tahu%20gejrot%21">
                    <div className='bg-[#863316] px-5 py-4 rounded-md text-white hover:bg-black duration-150'>
                        <h1 className='hover:scale-105 duration-150'>Kontak Septia</h1>
                    </div>
                </a>
            </div>
            <div className='md:before:w-6 before:h-6 before:bg-[#863316] before:absolute before:rounded-full before:top-[420vh] before:right-[40%] md:after:w-10 after:h-10 after:bg-[#863316] after:absolute after:rounded-full after:top-[350vh] after:right-[20%] after:z-[-1]'>
                <img className='w-80' src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}
