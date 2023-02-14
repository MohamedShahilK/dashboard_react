import React from 'react'

import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

// import { EditorData } from '../assets/dummy'
import { EditorData } from '../assets/data/editor_page_data'

import { Header } from '../components'

const Editor = () => {
  return (
    // <div>Editor</div>

    <div className='m-2 md:m-10 mt-24 p-2 md:pd-10 bg-white rounded-3xl'>

      <Header category="App" title="Editor" />

      <RichTextEditorComponent>

        <EditorData />

        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>

    </div>
  )
}

export default Editor