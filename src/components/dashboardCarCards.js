import React from 'react';
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { MdFlashOn } from 'react-icons/md';
import { BsArrowCounterclockwise, BsFillArrowUpRightSquareFill } from 'react-icons/bs';

const carCardsInfo = [
    {
        title: "64% Recommend",
        body: "Mini Cooper",
        image: require('./assets/car1.png'),
        price: '132K',
        perHour: '$32/h'
    },
    {
        title: "74% Recommend",
        body: "Porsche 911 Carrera",
        image: require('./assets/car2.png'),
        price: '130K',
        perHour: '$28/h'
    },
    {
        title: "74% Recommend",
        body: "Porsche 911 Carrera",
        image: require('./assets/car3.png'),
        price: '130K',
        perHour: '$28/h'
    }
]

const DashboardCarCards = () => {
    return (
        <div>
            <div className=' p-4 py-4 grid md:grid-cols-1 lg:grid-cols-3 gap-6 dashboard-bg'>
                {
                    carCardsInfo.map((item, index) => (
                        <Card key={index} className="w-full bg-gray-400 shadow-lg rounded-lg hover:scale-105 duration-300 rounded-xl relative">
                            <CardBody className='p-5'>
                                <Typography variant="h6" className=" items-center mb-2 inline-flex">
                                    <BsArrowCounterclockwise className='mr-3' /> {item.title}
                                </Typography>
                                <Typography>
                                    <img className='items-center' src={item.image} alt='' />
                                    <p className='font-bold mt-2 text-xl'>{item.body}</p>
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex items-center justify-between py-3">
                                <Typography variant="small"><BsFillArrowUpRightSquareFill /></Typography>
                                <Typography variant="small">{item.price}</Typography>
                                <Typography variant="small"><MdFlashOn /></Typography>
                                <Typography variant="small" color="gray" className="flex gap-1">
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

export default DashboardCarCards;