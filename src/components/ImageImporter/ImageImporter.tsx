import { StyledImageImporter, StyledImageImporterWrapper } from "./styles";
import { IImageImporterProps, imageSliceType } from "./types";
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from "react";



export const ImageImporter = ({

}:IImageImporterProps) => {
  
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        console.log(file)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])

  const [sliceType, setSliceType] = useState<imageSliceType>('single')
  const [sliceRows, setSliceRows] = useState<number>(1);
  const [sliceColumns, setSliceColumns] = useState<number>(1);




  const {getRootProps, getInputProps} = useDropzone({onDrop})


  console.log(sliceColumns, sliceRows)

  return (
    <StyledImageImporterWrapper>
      <StyledImageImporter >
        <div className="dropZone" {...getRootProps()}>
          <input {...getInputProps()} />
          <p> drag-drop or click </p>
        </div>
        <div className="controlsContainer">
          <select onChange={e => setSliceType(e.target.value as imageSliceType)} value={sliceType}>
            <option value={'single'}> Single </option>
            <option value={'multiple'}> Multiple </option>
          </select>
          {sliceType === 'multiple' && <div>
              <span> rows </span> <input type="number" defaultValue={1} onChange={e => setSliceRows(+e.target.value)}/>
              <span> columns </span> <input type="number" defaultValue={1} onChange={e => setSliceColumns(+e.target.value)}/>
            </div>}
        </div>
      </StyledImageImporter>
    </StyledImageImporterWrapper>

    
  )

}