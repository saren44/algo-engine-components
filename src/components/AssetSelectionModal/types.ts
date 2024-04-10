export interface IFile {
	fileName: string;
	content: string | Array<IFile>;
}


export interface IAssetSelectionModalProps {
	files: IFile;
	onFileSelection: (file: IFile) => void;
}
