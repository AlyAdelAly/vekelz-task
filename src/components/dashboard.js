import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MainPage from './mainPage';
import DashboardFirstCards from './dashboardFirstCards';
import DashboardChartCards from './dashboardChartCards';
import DashboardCarCards from './dashboardCarCards';

const dashboard = () => {
    return (
        <div>
            <MainPage />
            <DashboardFirstCards />
            <DashboardChartCards />
            <DashboardCarCards />
        </div>
    );
};

export default dashboard;