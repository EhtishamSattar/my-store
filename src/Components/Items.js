import React, { useState } from 'react'

import Item from './Item'

const Items = () => {
  const [things, setThings] = useState([])

  let url = 'https://fakestoreapi.com/products'

  async function bring(){
    const data=await fetch(url);
    const items=await data.json()
    setThings(items)
    return items

  }
  bring();


  return (
    <>
      <div>
      
      <div id="textAboveItems" className='text-5xl font-extrabold text-center'>Our Best Selling Products For You</div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {things.map((e) => {
              return (
                //console.log(e.title)
                <Item id={e.id} title={e.title} image={e.image} price={e.price} desc={e.description} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items
