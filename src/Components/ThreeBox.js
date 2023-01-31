import React from 'react'
import box1 from './images/box1.jpg'
import box2 from './images/box2.jpg'
import box3 from './images/box3.jpg'

const ThreeBox = () => {
  return (
    <>
            <div id="threeBoxes" className='mt-10'>
                <div className='box1 m-6 relative  hover:opacity-90'>
                    <img src={box1} alt='...' className='h-80 w-80 border  border-pink-900 d-block'></img>
                    <div className='expand flex flex-row items-center justify-around absolute left-0 right-0 h-20 bottom-0 bg-black text-white'>
                        <div className=''>Clothing</div>
                        <div className='number'>15</div>
                    </div>
                </div>
                <div className='box2 m-6 relative hover:opacity-90'>
                    <img src={box2} alt='...' className='h-80 w-80 border  border-pink-900 d-block hover:opacity-90'></img>
                    <div className='expand flex flex-row items-center justify-around absolute left-0 right-0 h-20 bottom-0 bg-black text-white'>
                        <div className=''>Accesories</div>
                        <div className='number'>40</div>
                        
                    </div>
                </div>
                <div className='box3 m-6 relative  hover:opacity-90'>
                    <img src={box3} alt='...' className='h-80 w-80 border  border-pink-900 d-block'></img>
                    <div className='expand flex flex-row items-center justify-around absolute left-0 right-0 h-20 bottom-0 bg-black text-white'>
                        <div className=''>Leather Bags</div>
                        <div className='number'>20</div>
                        
                    </div>
                </div>
            </div>
        </>
  )
}

export default ThreeBox
