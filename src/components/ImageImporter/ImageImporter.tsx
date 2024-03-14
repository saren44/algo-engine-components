import { StyledImageImporter, StyledImageImporterWrapper } from "./styles";
import { IImageImporterProps, imageSliceType } from "./types";
import { useDropzone } from 'react-dropzone'
import { useCallback, useState, useRef } from "react";



export const ImageImporter = ({
	onImageExport
}:IImageImporterProps) => {
  
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
				setImgUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    })
    
  }, [])

  const [sliceType, setSliceType] = useState<imageSliceType>('single')
  const [sliceRows, setSliceRows] = useState<number>(1);
  const [sliceColumns, setSliceColumns] = useState<number>(1);
	const [imgUrl, setImgUrl] = useState<string>('');
	const sourceCanvas = useRef<HTMLCanvasElement>(null);
	const targetCanvas = useRef<HTMLCanvasElement>(null);

	const sliceImage = () => {
		debugOpenImageInNewTab(imgUrl);
		let img = new Image();
		img.src = imgUrl;
		img.onload = () => {
			const src = sourceCanvas.current;
			const target = targetCanvas.current;
			if (src === null || target === null) {
				return;
			}
			src.width = img.width;
			src.height = img.height;
			const ctx = src.getContext('2d');
			const targetCtx = target.getContext('2d');
			ctx?.drawImage(img, 0, 0);

			const resultHeight = Math.ceil(img.height / sliceRows);
			const resultWidth =  Math.ceil(img.width / sliceColumns);
			console.log(resultHeight, resultHeight)
			target.width = resultWidth;
			target.height = resultHeight;
			for (let i = 0; i < sliceRows; i += 1) {
				for (let j = 0; j < sliceColumns; j += 1) {
					targetCtx?.drawImage(src, j * resultWidth, i * resultHeight, resultWidth, resultHeight, 0, 0, resultWidth, resultHeight);
					debugOpenImageInNewTab(target.toDataURL());
				}
			}
			
		}

	}

	const debugOpenImageInNewTab = (url: string) => {
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute(
			'target',
			`_blank`,
		);
		link.click();
	}




  const {getRootProps, getInputProps} = useDropzone({onDrop})

	const onImport = () => {
		 if (imgUrl !== null)  {
				sliceImage();

		}
		else {
			console.log('no file!')
		}
	}


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
          {sliceType === 'multiple' && <div style={{display: 'flex', flexDirection: 'column'}}>
              <span> rows </span> <input type="number" defaultValue={1} onChange={e => setSliceRows(+e.target.value)}/>
              <span> columns </span> <input type="number" defaultValue={1} onChange={e => setSliceColumns(+e.target.value)}/>
            </div>}
					<button onClick={onImport}> import </button>
					<canvas ref={sourceCanvas} style={{width: 0, height: 0}}/>
					<canvas ref={targetCanvas} style={{width: 0, height: 0}}/>
        </div>
      </StyledImageImporter>
    </StyledImageImporterWrapper>

    
  )

}