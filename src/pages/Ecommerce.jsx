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
      <div>

      </div>
      {/* Revenue Section */}

    </div>
  )
}

export default Ecommerce