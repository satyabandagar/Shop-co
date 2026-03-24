import React from 'react'
import Img from "../assets/HeroSectionImg.jpg"

function HeroSection() {
  return (
    <div className='w-full h-200'>
      <div className="grid-cols-2 flex gap-2 mt-2">
        <div className="w-full  flex flex-col items-center">
            <h1 className='text-6xl font-medium mr-17 mt-30 '>FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE</h1>
            <p className='pl-34 font-thin mt-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='w-40 h-10 bg-black text-white mt-8 mr-80 rounded-2xl'>Shop Now</button>
            <div className=" flex gap-8 mt-8 ml-10">
                <div className=" gap-3">
                    <h1 className='text-5xl'>200+</h1>
                    <p className='font-thin'>International Brands</p>
                </div>
                <div className="">
                    <h1 className='text-5xl'>2,000+</h1>
                    <p className='font-thin'>High-Quality Products</p>
                </div>
                <div className="">
                    <h1 className='text-5xl'>30,000+</h1>
                    <p className='font-thin'>Happy Customers</p>
                </div>
            </div>
        </div>
        <div className=" w-full">
            <div className=" w-150">
                <img className='w-full h-200 transform' src={Img} alt="" />
            </div>
        </div>
      </div>
      <div className="w-full h-50 relative bottom-40  bg-black">
       <div className="flex gap-40 h-full text-white text-center justify-center">
        <h1 className='mt-20 text-4xl'>VERSACE</h1>
        <h1 className='mt-20 text-4xl'>ZARA</h1>
        <h1 className='mt-20 text-4xl'>GUCCI</h1>
        <h1 className='mt-20 text-4xl' >PRADA</h1>
        <h1 className='mt-20 text-4xl'>Calvin Klein</h1>
       </div>
      </div>
    </div>
  )
}

export default HeroSection
