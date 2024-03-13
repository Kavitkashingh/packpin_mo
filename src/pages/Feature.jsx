import React from 'react'
import img from '../assets/pizza.png'
import imgs from '../assets/pizzah.png'


const Feature = () => {

    return (
        // <div className=' grid grid-cols-5 xs:grid-cols-1 w-[100%] m-2 flex-wrap mx-auto justify-center items-center bg-[#d9d9d9] h-[450px]'>
        <div className='xs:w-[95%] w-[85%] mx-auto  justify-center items-start mx-auto overflow-hidden mb-[-50px] '>

            <div className='w-[98%] ml-1 my-2'>
                <div className='flex  w-auto bg-white flex-wrap mx-auto justify-center items-start rounded-xl '>
                    <div className='flex justify-center items-start flex-col overflow-hidden p-2'>
                        <img className='border border-2 sm:w-full xs:h-[70px] xs:w-[70px] w-[264px] h-[291px] bg-slate-400 rounded-full' src={img} alt="product images" />
                        <span className='ml-2'>Product</span>
                    </div>
                    <div className='flex flex-col overflow-hidden p-2'>
                        <img className='border-2 sm:w-full xs:h-[70px] xs:w-[70px] w-[264px] h-[291px] bg-slate-400 rounded-full' src={img} alt="product images" />
                        <span className='ml-2'>Product</span>
                    </div>
                    <div className='flex flex-col overflow-hidden p-2'>
                        <img className='border-2 sm:w-full xs:h-[70px] xs:w-[70px] w-[264px] h-[291px] bg-slate-400 rounded-full' src={img} alt="product images" />
                        <span className='ml-2'>Product</span>
                    </div>
                    <div className='flex flex-col overflow-hidden p-2'>
                        <img className='border-2 sm:w-full xs:h-[70px] xs:w-[70px] w-[264px] h-[291px] bg-slate-400 rounded-full' src={img} alt="product images" />
                        <span className='ml-2'>Product</span>
                    </div>
                </div>

            </div>

            <div className='grid  grid-cols-4 xs:pb-20 gap-2 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md-lg:grid-cols-3 2xl:grid-cols-4 p-1'>
                <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                    <div className='relative overflow-hidden p-2'>
                        <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                    </div>
                    <span >Name</span><br />
                    <span>Product</span>
                </div>
                <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                    <div className='relative overflow-hidden p-2'>
                        <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                    </div>
                    <span >Name</span><br />
                    <span>Product</span>
                </div>
                <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                    <div className='relative overflow-hidden p-2'>
                        <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                    </div>
                    <span >Name</span><br />
                    <span>Product</span>
                </div>
                <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                    <div className='relative overflow-hidden p-2'>
                        <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                    </div>
                    <span >Name</span><br />
                    <span>Product</span>
                </div>
            </div>
        </div>
    )
}

export default Feature
