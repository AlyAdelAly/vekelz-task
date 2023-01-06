import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { BarChart, LineChart, Line, XAxis, Tooltip, Bar } from 'recharts';
import MainPage from './mainPage';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdFlashOn, MdWaterDrop } from 'react-icons/md';
import { BsArrowDown, BsLampFill, BsArrowCounterclockwise, BsFillArrowUpRightSquareFill } from 'react-icons/bs';


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

const cardsInfo = [
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

const dashboard = () => {
    return (
        <div>
            <MainPage />
            <div className='max-w-[1640px] md:ml-64 p-4 py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 dashboard-bg'>

                <Card className="w-full h-full card-energy-bg relative">
                    <CardBody className='p-5 text-center'>
                        <Typography className="mb-2">
                            <Button className='energy-icon rounded-full '>
                                <MdFlashOn size={20} />
                            </Button>
                        </Typography>
                        <Typography className='font-bold text-3xl text-white mt-6'>
                            Energy
                        </Typography>
                    </CardBody>
                    <CardFooter>
                        <Typography>
                            <CircularProgressbar className=' w-[150px] h-[150px]' styles={buildStyles({ textSize: '20px', textColor: '#fff', pathColor: '#A162F7' })} value={45} text={'45%'} strokeWidth={5} background={true} counterClockwise={true} />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-full h-full card-bg relative">
                    <CardBody className='p-5 text-center'>
                        <Typography className="mb-2">
                            <Button style={{ backgroundColor: '#FF7E861A' }} className='rounded-full '>
                                <BsArrowDown style={{ color: '#FF7E86' }} size={20} />
                            </Button>
                        </Typography>
                        <Typography className='font-bold text-3xl text-white mt-6'>
                            <br></br>
                        </Typography>
                    </CardBody>
                    <CardFooter>
                        <Typography>
                            <CircularProgressbar className='md:w-[150px] h-[150px]' styles={buildStyles({ textSize: '20px', textColor: '#FFF', pathColor: '#FF7E86' })} value={50} text={'157K%'} strokeWidth={5} counterClockwise={true} />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-full h-full card-bg relative">
                    <CardBody className='p-5 text-center'>
                        <Typography className="mb-2">
                            <Button style={{ backgroundColor: '#A162F71A' }} className='rounded-full '>
                                <MdWaterDrop style={{ color: '#A162F7' }} size={20} />
                            </Button>
                        </Typography>
                        <Typography className='font-bold text-3xl text-white mt-6'>
                            <br></br>
                        </Typography>
                    </CardBody>
                    <CardFooter>
                        <Typography>
                            <CircularProgressbar className='md:w-[150px] h-[150px]' styles={buildStyles({ textSize: '20px', textColor: '#FFF', pathColor: '#A162F7' })} value={9} text={'9%'} strokeWidth={5} counterClockwise={true} />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-full h-full card-bg relative">
                    <CardBody className='p-5 text-center'>
                        <Typography className="mb-2">
                            <Button style={{ backgroundColor: '#F6CC0D1A' }} className='rounded-full '>
                                <BsLampFill style={{ color: '#F6CC0D' }} size={20} />
                            </Button>
                        </Typography>
                        <Typography className='font-bold text-3xl text-white mt-6'>
                            <br></br>
                        </Typography>
                    </CardBody>
                    <CardFooter>
                        <Typography>
                            <CircularProgressbar className='md:w-[150px] h-[150px]' styles={buildStyles({ textSize: '20px', textColor: '#FFF', pathColor: '#F6CC0D' })} value={25} text={'25%'} strokeWidth={5} counterClockwise={true} />
                        </Typography>
                    </CardFooter>
                </Card>
            </div>

            <div className='md:ml-64 p-4 py-4 grid md:grid-cols-1 custom-lg:grid-cols-1 laptop:grid-cols-2 gap-6 dashboard-bg' >
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

            <div className='md:ml-64 p-4 py-4 grid md:grid-cols-1 lg:grid-cols-3 gap-6 dashboard-bg'>
                {
                    cardsInfo.map((item, index) => (
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

export default dashboard;