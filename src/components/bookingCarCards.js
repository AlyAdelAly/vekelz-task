import React from 'react';
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { BsSquare, BsHeart } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

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

const BookingCarCards = () => {
    return (
        <div className='p-4 py-4 grid md:grid-cols-1 lg:grid-cols-3 gap-6 dashboard-bg'>
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
                                <Typography><FaUser style={{ color: '#A162F7' }} className='mr-2' /></Typography>
                                <Typography variant="small" className='align-items'>{item.user}</Typography>
                            </div>
                            <div className='flex text-white'>
                                <Typography><BsSquare style={{ color: '#A162F7' }} className='mr-2' /></Typography>
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
    );
};

export default BookingCarCards;