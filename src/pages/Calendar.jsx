import React from 'react'

import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Inject, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

// import { scheduleData } from '../assets/dummy'
import { scheduleData } from '../assets/data/calendar_page_data'

// import {Header} from '../components/index'
import { Header } from '../components'

const Calendar = () => {
  return (
    // <div>Calendar</div>

    <div className='m-2 md:m-10 mt-24 p-2 md:pd-10 bg-white rounded-3xl'>

      <Header category="App" title="Calendar" />


      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        
        // Selected date is set to 2021 becoz, our data containing "date is belonging to 2021"
        selectedDate={new Date(2021, 0, 10)}
      >

        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>

    </div>
  )
}

export default Calendar