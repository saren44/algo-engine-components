import { ReactNode, useState, useRef } from "react"
import { StyledFileTree } from "./styles"
import { IFile, IFileIconProps, IFileTreeProps } from "./types"

export const FileTree = ({
	files,
	displayType = 'list'
}: IFileTreeProps) => {
	const [currentFile, setCurrentFile] = useState<IFile>(files);
	const prevFileStack = useRef<IFile[]>([files]);

	const resolveCurrentFile = () => {

		if (currentFile.content instanceof Array && currentFile.content.length > 0){
			let ret: ReactNode[] = [];

			currentFile.content.forEach((el) => {
				ret.push(<div className={displayType + 'Icon'} onClick={() => { prevFileStack.current.push(currentFile) ; setCurrentFile(el); }}> {el.fileName} </div>)
			})
			return ret;
		}
		else if (typeof currentFile.content === 'string') {
			return <p> {currentFile.content} </p>
		}
		return <p>how did we get here?</p>
	}

	const goUp = () => {
		const prev = prevFileStack.current.pop();
		if (!prev) {
			prevFileStack.current.push(files)
		}
		else {
			setCurrentFile(prev);
		}
	}

	return(
	<StyledFileTree>
		<button onClick={goUp}> return </button>
		<div className="filesContainer">
			{
				resolveCurrentFile()
			}
		</div>

	</StyledFileTree>
	)
}