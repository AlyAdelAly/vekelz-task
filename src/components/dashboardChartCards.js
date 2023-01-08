import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { BarChart, LineChart, Line, XAxis, Tooltip, Bar } from 'recharts';


const Data = [
    {
        name: '7 am',
        price: 24000,
    },
    {
        name: '9 am',
        price: 13980,
    },
    {
        name: '11 am',
        price: 9800,
    },
    {
        name: '1 am',
        price: 39080,
    },
    {
        name: '3 am',
        price: 48000,
    },
    {
        name: '5 am',
        price: 38000,
    },
    {
        name: '7 pm',
        price: 43000,
    }
];

const DashboardChartCards = () => {
    return (
        <div className=' p-4 py-4 grid md:grid-cols-1 custom-lg:grid-cols-1 laptop:grid-cols-2 gap-6 dashboard-bg' >
                <Card className="w-full h-full card-bg relative">
                    <CardBody className='p-5 text-white font-bold text-lg'>
                        <Typography variant="h4" className="mb-2">
                            Miles Statistics
                        </Typography>
                        <Typography variant="h6" className="mt-4 inline-flex">
                            <Button className='shadow-none hover:shadow-none h-9 rounded-full mr-4'>
                                Day
                            </Button>
                            <Button className='shadow-none hover:shadow-none button-bg h-9 rounded-full mr-4'>
                                week
                            </Button>
                            <Button className='shadow-none hover:shadow-none button-bg h-9 rounded-full'>
                                month
                            </Button>
                            <p className='mt-2 ml-12'>256 Miles</p>
                        </Typography>
                        <Typography className='mt-6'>
                            <BarChart
                                width={500}
                                height={300}
                                data={Data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Bar dataKey="price" fill="#1F2128" />
                            </BarChart>
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-full h-full card-bg relative">
                    <CardBody className='p-5 text-white font-bold text-lg'>
                        <Typography variant="h4" className="mb-2">
                            Car Statistics
                        </Typography>
                        <Typography variant="h6" className="mt-4 inline-flex">
                            <p className='mt-2 mr-16 text-lg'>20 February 2022</p>
                            <Button style={{ backgroundColor: '#FF764C' }} className='shadow-none hover:shadow-none h-9 rounded-full mr-2'>
                                Day
                            </Button>
                            <Button className='shadow-none hover:shadow-none button-bg h-9 rounded-full mr-2'>
                                week
                            </Button>
                            <Button className='shadow-none hover:shadow-none button-bg h-9 rounded-full'>
                                month
                            </Button>
                        </Typography>
                        <Typography className='text-white mt-6'>
                            <LineChart
                                width={500}
                                height={300}
                                data={Data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Line type="monotone" dataKey="price" stroke="#FF764C4A" activeDot={{ r: 8 }} />
                            </LineChart>
                        </Typography>
                    </CardBody>
                </Card>
            </div>

    );
};

export default DashboardChartCards;