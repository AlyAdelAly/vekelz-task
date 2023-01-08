import React from 'react';
import MainPage from './mainPage';
import { Button } from "@material-tailwind/react";
import { MdArrowDownward } from 'react-icons/md';
import { FaFilter } from 'react-icons/fa';
import BookingCarCards from './bookingCarCards';

const Booking = () => {
    return (
        <div>
            <MainPage />
            <div className='p-6 py-6 dashboard-bg text-white text-3xl font-bold'>
                <h1>Booking</h1>
                <div className='flex flex-row pt-4'>
                    <Button className='flex button-bg shadow-none hover:shadow-none rounded-full mr-8'>
                        New <MdArrowDownward size={15} className='ml-4' />
                    </Button>
                    <Button className='flex button-bg shadow-none hover:shadow-none rounded-full'>
                        Toyota <MdArrowDownward size={15} className='ml-4' />
                    </Button>
                    <Button className='absolute filter-bg right-8 button-bg shadow-none hover:shadow-none rounded-full'>
                        <FaFilter size={18} />
                    </Button>
                </div>
            </div>
            <BookingCarCards />
        </div>
    );
};

export default Booking;