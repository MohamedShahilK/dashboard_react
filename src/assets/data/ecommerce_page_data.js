import { MdOutlineSupervisorAccount } from 'react-icons/md'
import { BsBoxSeam } from 'react-icons/bs'
import { FiBarChart } from 'react-icons/fi'
import { HiOutlineRefresh } from 'react-icons/hi'


export const earningData = [
    {
        icon: <MdOutlineSupervisorAccount />,
        amount: '39,354',
        percentage: '-4%',
        title: 'Customers',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
        pcColor: 'red-600',
    },
    {
        icon: <BsBoxSeam />,
        amount: '4,396',
        percentage: '+23%',
        title: 'Products',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
        pcColor: 'green-600',
    },
    {
        icon: <FiBarChart />,
        amount: '423,39',
        percentage: '+38%',
        title: 'Sales',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',

        pcColor: 'green-600',
    },
    {
        icon: <HiOutlineRefresh />,
        amount: '39,354',
        percentage: '-12%',
        title: 'Refunds',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
        pcColor: 'red-600',
    },
];

export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },

    // { x: 0, xval: '2005', yval: 20090440 },
    // { x: 1, xval: '2006', yval: 20264080 },
    // { x: 2, xval: '2007', yval: 20434180 },
    // { x: 3, xval: '2008', yval: 21007310 },
    // { x: 4, xval: '2009', yval: 21262640 },
    // { x: 5, xval: '2010', yval: 21515750 },
    // { x: 6, xval: '2011', yval: 21766710 },
    // { x: 7, xval: '2012', yval: 22015580 },
    // { x: 8, xval: '2013', yval: 22262500 },
    // { x: 9, xval: '2014', yval: 22507620 },

];

export const ecomPieChartData = [
    { x: '2018', y: 18, text: '35%' },
    { x: '2019', y: 18, text: '15%' },
    { x: '2020', y: 18, text: '25%' },
    { x: '2021', y: 18, text: '25%' },
];


// For Stacked

export const stackedChartData = [
    [
        { x: 'Jan', y: 111.1 },
        { x: 'Feb', y: 127.3 },
        { x: 'Mar', y: 143.4 },
        { x: 'Apr', y: 159.9 },
        { x: 'May', y: 159.9 },
        { x: 'Jun', y: 159.9 },
        { x: 'July', y: 159.9 },
    ],
    [
        { x: 'Jan', y: 111.1 },
        { x: 'Feb', y: 127.3 },
        { x: 'Mar', y: 143.4 },
        { x: 'Apr', y: 159.9 },
        { x: 'May', y: 159.9 },
        { x: 'Jun', y: 159.9 },
        { x: 'July', y: 159.9 },
    ],
];

export const stackedCustomSeries = [

    {
        dataSource: stackedChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Budget',
        type: 'StackingColumn',
        background: 'blue',

    },

    {
        dataSource: stackedChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'Expense',
        type: 'StackingColumn',
        background: 'red',

    },

];

export const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
};

export const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 100,
    maximum: 400,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
};

// For Stacked