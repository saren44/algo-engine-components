import { ReactNode, useState, useRef } from "react"
import { StyledFileTree } from "./styles"
import { IFile, IFileIconProps, IFileTreeProps } from "./types"

export const FileTree = ({
	files,
	displayType = 'list',
	onFileSelection,
}: IFileTreeProps) => {
	const [currentFile, setCurrentFile] = useState<IFile>(files);
	const prevFileStack = useRef<IFile[]>([files]);

	const resolveCurrentFile = () => {

		if (currentFile.content instanceof Array && currentFile.content.length > 0){
			let ret: ReactNode[] = [];

			currentFile.content.forEach((el) => {
				ret.push(<div className={displayType + 'Icon'} onClick={() => handleClickFile(el)}> {el.fileName} </div>)
			})
			return ret;
		}
		else if (typeof currentFile.content === 'string') {
			onFileSelection(currentFile);
		}
		return <p>how did we get here?</p>
	}

	const handleClickFile = (el: IFile) => {
		if (typeof el.content === 'string') {
			onFileSelection(el)
		}
		else {
			prevFileStack.current.push(currentFile);
			setCurrentFile(el);
		}
	}

	const handleReturn = () => {
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
		<button onClick={handleReturn}> return </button>
		<div className="filesContainer">
			{
				resolveCurrentFile()
			}
		</div>

	</StyledFileTree>
	)
}