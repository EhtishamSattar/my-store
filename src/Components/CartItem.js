import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'


const CartItem = (props) => {
    
    let { title, image,priceXquantity, quantity,rerender,setrerender } = props;
    
    const dispatch = useDispatch();
    let actions = bindActionCreators(actionCreators, dispatch)
    
    const handleAddOne=(item)=>{
        actions.addToCart(item)
        setrerender(!rerender);
    }
    
    const handleRemOne=(item)=>{
        // console.log("item",item)
        actions.removeFromCart(item)
        setrerender(!rerender);
        //setRerender(!rerender); 
    }

    return (
        <>
            <div className=" lg:flex mb-3  bg-slate-900">
                <div className="h-46 lg:h-auto lg:w-28 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ "backgroundImage": `url(${image})` }} title={title}>
                </div>
                <div className="text-white  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <div className=" font-light text-lg mb-2">{title}</div>
                    </div>
                    <div className=" text-gray-400">
                        <div className="text-sm">
                            <p className="leading-none mb-2"> Total Price  $ {priceXquantity.toFixed(2)}</p>
                            <div className='flex flex-row min-w-full justify-between'>
                                <div> Pieces </div>
                                <div>

                                    <div>
                                        <button className='bg-white w-5 focus:ring-2 focus:ring-sky-600 focus:outline-none font-bold text-slate-900 text-base mr-2' onClick={()=>{handleRemOne(props)}}>
                                            -
                                        </button>
                                        
                                        {quantity}

                                        <button className='bg-white w-5 font-bold text-base focus:ring-2 focus:ring-sky-600 focus:outline-none text-slate-900 ml-2 ' onClick={()=>{handleAddOne(props)}}>
                                            +
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
