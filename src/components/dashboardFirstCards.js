import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { MdFlashOn, MdWaterDrop } from 'react-icons/md';
import { BsArrowDown, BsLampFill } from 'react-icons/bs';

const DashboardFirstCards = () => {
    return (
        <div>
            <div className='max-w-[1640px]  p-4 py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 dashboard-bg'>

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

        </div>
    );
};

export default DashboardFirstCards;