import React from 'react'

import {
  GridComponent, ColumnsDirective, ColumnDirective,
  // Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject
  Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids'

// import { employeesData, employeesGrid } from '../assets/dummy'
import { employeesData, employeesGrid } from '../assets/data/employees_page_data'

// import {Header} from '../components/index'
import { Header } from '../components'

const Employees = () => {
  return (
    // <div>Employees</div>

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />

      {/* DataTable By Using Synfusion */}

      <GridComponent
        id='datatablewithsyn-2'
        // Data comes under corresponding Header field as "ColumnDirective" we written under "ColumnsDirective"
        dataSource={employeesData}
        allowPaging // to get pagination -- Also to work pagination properly , we need to Inject "Page"
        toolbar={['Search']} // we need to Inject "Search" and "Toolbar"
        width='auto'

      >
        <ColumnsDirective>
          {/* Here we spreading item from employeesGrid, becoz we written all fields required in there */}
          {/* For the Heading of the table*/}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>

        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>

      {/* DataTable By Using Synfusion */}
    </div>
  )
}

export default Employees