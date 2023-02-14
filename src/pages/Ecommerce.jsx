import React from 'react'

import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

import { Button, Stacked, Pie, SparkLine } from '../components'

// import { earningData, SparklineAreaData, ecomPieChartData } from '../assets/dummy'
import { earningData, SparklineAreaData, ecomPieChartData } from '../assets/data/ecommerce_page_data'

import { UseContextProvider } from '../contexts/ContextProvider'

const Ecommerce = () => {
  return (
    <div className='mt-12'>

      {/* Upper Section */}

      {/* The flex-wrap property specifies whether the flexible items should wrap or not.Note: If the elements are not flexible items, the flex-wrap property has no effect. */}
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        {/* Image Container Section */}

        <div className='w-full lg:w-80 h-44 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center rounded-xl
               dark:text-gray-400 bg-white  dark:bg-secondary-dark-bg'>

          {/* Inside of Image */}

          <div className='flex justify-between items-center'>

            {/* Earnings */}
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63448.78</p>
            </div>
            {/* Earnings */}

          </div>

          <div className='mt-6'>
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>

          {/* Inside of Image */}

        </div>
        {/* Image Container Section */}

        {/* Cards Section */}
        <div className='m-3 flex flex-wrap justify-center items-center gap-1 '>

          {
            earningData.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 p-4 pt-9 rounded-2xl"
              >

                {/* icon */}
                <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl">
                  {item.icon}
                </button>

                {/* amount and percentage */}
                <p className='mt-3'>
                  <span className='text-lg font-semibold '>
                    {item.amount}
                  </span>

                  {/* A bug is happening here when color is dynamically given */}
                  {/* So if that bug happens, then first give all non working colors manually.After that make it dynamic again.Then problem will solve */}
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>

                {/* title */}
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>

              </div>
            ))
          }

        </div>
        {/* Cards Section */}

      </div>
      {/* Upper Section */}

      {/* Revenue Section */}
      <div className='flex flex-wrap justify-center'>

        <div className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780'>


          {/* Above Content of Revenue Section*/}
          <div className='flex justify-between'>

            {/* Heading */}
            <p className='font-semibold text-xl'>Revenue Updates</p>

            {/* Expense and  Budget*/}
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>

              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>

          </div>
          {/* Above Content of Revenue Section*/}

          {/* Below Content of Revenue Section*/}
          <div className='mt-10 flex flex-wrap justify-center gap-10 '>

            {/* Left Part of below Content of Revenue Section */}
            <div className='border-r-1 border-color m-4 pr-10'>

              {/* Budget */}
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl text-white bg-green-400 rounded-full ml-3 text-xs cursor-pointer'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>

              {/* Expense */}
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>

              {/* SparkLine Chart */}
              <div className='mt-5'>

                <SparkLine
                  borderColor="red"
                  id="line-sparkline"
                  type="line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  graphFillColor="blue"
                />
              </div>

              {/* Download Report Button */}
              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>

            </div>
            {/* Left Part of below Content of Revenue Section */}

            {/* Right Part of below Content of Revenue Section */}
            <div>

              <Stacked
                width="320px"
                height="360px"
              />

            </div>
            {/* Right Part of below Content of Revenue Section */}

          </div>
          {/* Below Content of Revenue Section*/}

        </div>

      </div>
      {/* Revenue Section */}

    </div>
  )
}

export default Ecommerce