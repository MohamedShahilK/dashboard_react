import React from 'react'

import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'

// import { kanbanData, kanbanGrid } from '../assets/dummy'
import { kanbanData, kanbanGrid } from '../assets/data/kanban_page_data'

// import {Header} from '../components/index'
import { Header } from '../components'

const Kanban = () => {
  return (
    // <div>Kanban</div>
    <div className='m-2 md:m-10 mt-24 p-2 md:pd-10 bg-white rounded-3xl'>

      <Header category="App" title="Kanban" />

      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}

        // Summary, Id, Status are fields coming from kanbanData
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField="Status" // arranging items to "corresponding keyFields of ColumnsDirective"
      >
        <ColumnsDirective>
          {
            kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)
          }
        </ColumnsDirective>
      </KanbanComponent>

    </div>
  )
}

export default Kanban 