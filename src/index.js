import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import './styles.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function App() {
  const [files, setFiles] = useState([])
  return (
    <div className="App">
      <FilePond
        allowMultiple={false}
        onupdatefiles={setFiles}
        labelIdle='2MB 이하의 png, gif, jpg(jpeg), pdf, tif(tiff) <span class="filepond--label-action">파일 찾기</span>'
      >
        {files.map(fileItem => {
          return <File key={fileItem.file} src={fileItem.file} origin="local" />
        })}
      </FilePond>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
