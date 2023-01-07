import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsBag, BsCalendar2Fill, BsCart, BsScissors } from 'react-icons/bs'
import { FaCar, FaCog, FaComment, FaUser } from 'react-icons/fa'
import { MdDashboard, MdLogout, MdNotifications } from 'react-icons/md'


const sidebarNavItemsTop = [
    {
        display: 'Dashboard',
        icon: <MdDashboard size={20} className='mr-3' />
    },
    {
        display: 'Assets',
        icon: <FaUser size={20} className='mr-3' />
    },
    {
        display: 'Booking',
        icon: <FaCar size={20} className='mr-3' />
    },
    {
        display: 'Sell Cars',
        icon: <BsBag size={20} className='mr-3' />
    },
    {
        display: 'Buy Cars',
        icon: <BsCart size={20} className='mr-3' />
    },
    {
        display: 'Services',
        icon: <BsScissors size={20} className='mr-3' />
    },
    {
        display: 'Calender',
        icon: <BsCalendar2Fill size={20} className='mr-3' />
    },
    {
        display: 'Messages',
        icon: <FaComment size={20} className='mr-3' />
    }
];

const MainPage = () => {

    const [nav, setNav] = useState(false);
    return (
        <div className='flex p-4'>

            <div className='flex justify-between items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu className='text-white' size={30} />
                </div>
                <div className='md:ml-12 rounded-lg search-bg px-4 flex items-center md:w-[400px] sm:w-[200px] ml-10 lg:w-[500px]'>
                    <AiOutlineSearch size={22} />
                    <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search...' />
                </div>
                <div className='hidden md:flex items-center absolute right-6'>
                    <MdNotifications size={25} className=' mr-5 text-gray-100' />
                    <img className='rounded-full w-[40px]' src={require('./assets/avatar.png')} alt='' />
                </div>
            </div>
            {
                nav ? <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div> : ''
            }
            <div className={nav ? 'fixed top-0 left-0 w-60 card-bg h-screen z-10 duration-300' : 'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl mt-3 text-white flex'>
                    <img className='inline px-1' src={require('./assets/logo.png')} alt='' /> Motiv
                </h2>
                <nav className='flex flex-col'>
                    <ul>
                        {
                            sidebarNavItemsTop.map((item, index) => (
                                <li key={index}>
                                    {item.display === 'Booking' ? <Link to='/booking' className="flex items-center text-sm px-2 h-10 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out" >{item.icon} {item.display}</Link> :
                                        <Link className="flex items-center text-sm px-2 h-10 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out" >{item.icon} {item.display}</Link>}
                                </li>
                            ))
                        }
                    </ul>

                    <div className="bottom-20 absolute w-full">
                        <a className="flex items-center text-sm px-2 h-10 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out" href="#!"><FaCog size={20} className='mr-3' /> Settings </a>
                    </div>
                    <div className="bottom-10 absolute w-full">
                        <a className="flex items-center text-sm px-2 h-10 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out" href="#!"><MdLogout size={20} className='mr-3' /> Log Out</a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MainPage;