import React from 'react'
import Cart from './Cart'

const Navbar = () => {
    return (
        <>
            <nav id="navbar" className="bg-white dark:bg-gray-700 sticky top-0">
                <div className="flex items-center justify-start w-screen px-4 py-3 mx-auto md:px-6">
                    <div className='icon'>
                        E-site
                    </div>
                    <div id="topitems" className="flex items-center ml-32">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white  hover:text-yellow-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white  hover:text-yellow-500">Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white  hover:text-yellow-500">Team</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white  hover:text-yellow-500 ">Features</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:text-yellow-500">Go Premium</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:text-yellow-500">Feedback</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
