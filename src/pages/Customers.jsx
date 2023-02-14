import React from 'react'

import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Inject, Page, Edit, Selection, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids'

// import { customersData, customersGrid } from '../assets/dummy'
import { customersData, customersGrid } from '../assets/data/customers_page_data'

// import {Header} from '../components/index'
import { Header } from '../components'

const commandClick = (args) => {
  if (args.commandColumn.buttonOption.content === 'Delete') {
    // var grid = document.getElementById('Grid').ej2_instances[0];
    // grid.deleteRow(args.target.closest('tr'));
  }
  console.log('111111111111111111111111');
}

const Customers = () => {
  return (
    // <div>Customers</div>
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />

      {/* DataTable By Using Synfusion */}

      <GridComponent
        id='datatablewithsyn-3'
        // Data comes under corresponding Header field as "ColumnDirective" we written under "ColumnsDirective"
        dataSource={customersData}
        allowPaging // to get pagination -- Also to work pagination properly , we need to Inject "Page"
        allowSorting //  we need to Inject "Sort"
        toolbar={['Delete',]} // //  we need to Inject "Toolbar"
        editSettings={{ allowEditing: true, allowDeleting: true, }}
        width='auto'
        commandClick={commandClick}

      >
        <ColumnsDirective>
          {/* Here we spreading item from employeesGrid, becoz we written all fields required in there */}
          {/* For the Heading of the table*/}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>

        <Inject services={[Page, Edit, Selection, Toolbar, Sort, Filter]} />

      </GridComponent>

      {/* DataTable By Using Synfusion */}
    </div>
  )
}

export default Customers


// https://ej2.syncfusion.com/react/demos/#/bootstrap5/grid/overview

// For Action
// https://stackblitz.com/edit/react-t64b7e-wf6qcn?file=index.js,data.js