import { useState } from "react"
import { FileTreeView } from "../FileTree/FileTreeNew"
import { StyledAssetSelectionModal } from "./styles"
import { IAssetSelectionModalProps } from "./types"


export const AssetSelectionModal = ({
	files,
	onConfirmation
}: IAssetSelectionModalProps) => {
	const [selectedFile, setSelectedFile] = useState<string>('')

	return(
		<StyledAssetSelectionModal>
			<div className="fileTreeContainer">
				<FileTreeView files={files} onFileSelection={(fname) => setSelectedFile(fname)}/>
			</div>
			<div className="controlsCOntainer">
				<span> {`selected file: ${selectedFile !== '' ? selectedFile : 'none'}`} </span>
			</div>
			<button onClick={() => onConfirmation(selectedFile)} disabled={selectedFile === ''}> select </button>
		</StyledAssetSelectionModal>
	)
}