import React from 'react'

import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids'

// import { ordersData, contextMenuItems, ordersGrid } from '../assets/dummy'
import { ordersData, contextMenuItems, ordersGrid } from '../assets/data/orders_page_data'

// import {Header} from '../components/index'
import { Header } from '../components'

const Orders = () => {
  return (
    // <div>Orders</div>

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />

      {/* DataTable By Using Synfusion */}

      <GridComponent
        id='datatablewithsyn'
        // Data comes under corresponding Header field as "ColumnDirective" we written under "ColumnsDirective"
        dataSource={ordersData}
        allowPaging // to get pagination -- Also to work pagination properly , we need to Inject "Page"
        allowSorting // we need to Inject "Sort"
      >
        <ColumnsDirective>
          {/* Here we spreading item from ordersGrid, becoz we written all fields required in there */}
          {/* For the Heading of the table*/}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>

        {/* <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} /> */}
        <Inject services={[Sort, Page]} />

      </GridComponent>

      {/* DataTable By Using Synfusion */}
    </div>
  )
}

export default Orders