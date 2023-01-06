import React from 'react';
import MainPage from './mainPage';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { BsSquare, BsHeart } from 'react-icons/bs';
import { MdArrowDownward } from 'react-icons/md';
import { FaFilter, FaUser } from 'react-icons/fa';

const carCardsInfo = [
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car1.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car2.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car3.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car3.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car2.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car1.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car2.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car1.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    },
    {
        title: "Porshe 718 Cayman S",
        body: "Coupe",
        image: require('./assets/car3.png'),
        manual: 'Manual',
        perHour: '$400/d',
        user: '4'
    }
]


const Booking = () => {
    return (
        <div>
            <MainPage />
            <div className='md:ml-64 p-6 py-6 dashboard-bg text-white text-3xl font-bold'>
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
            <div className='md:ml-64 p-4 py-4 grid md:grid-cols-1 lg:grid-cols-3 gap-6 dashboard-bg'>
                {
                    carCardsInfo.map((item, index) => (
                        <Card key={index} className="w-full card-bg shadow-lg rounded-lg hover:scale-105 duration-300 rounded-xl relative">
                            <CardBody className='p-5'>
                                <Typography variant="h6" className=" flex text-white items-center mb-2">
                                    {item.title} <BsHeart className='absolute right-4' />
                                </Typography>
                                <Typography>
                                    {item.body}
                                </Typography>
                                <Typography>
                                    <img className='items-center' src={item.image} alt='' />
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex items-center justify-between py-3">
                                <div className='flex text-white'>
                                    <Typography><FaUser style={{color:'#A162F7'}} className='mr-2' /></Typography>
                                    <Typography variant="small" className='align-items'>{item.user}</Typography>
                                </div>
                                <div className='flex text-white'>
                                    <Typography><BsSquare style={{color:'#A162F7'}} className='mr-2' /></Typography>
                                    <Typography variant="small">{item.manual}</Typography>
                                </div>
                                <Typography variant="small" className="flex text-white gap-1">
                                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                    {item.perHour}
                                </Typography>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Booking;