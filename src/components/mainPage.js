import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
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
    return (
        <div className='flex p-4'>

            <div className='flex justify-between items-center'>

                <div className='ml-64 rounded-lg search-bg px-4 flex items-center w-[200px] sm:w-[200px] lg:w-[500px]'>
                    <AiOutlineSearch size={22} />
                    <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search...' />
                </div>
                <div className='flex flex-row items-center absolute right-6 px-4'>
                    <MdNotifications size={25} className='mr-5 text-gray-100' />
                    <img className='rounded-full w-[40px]' src={require('./avatar.png')} alt='' />
                </div>
            </div>
            <div className='w-60 h-full px-1 fixed'>
                <h2 className='text-2xl pb-4 text-white'>
                    <img className='inline px-1' src={require('./logo.png')} alt='' /> Motiv
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