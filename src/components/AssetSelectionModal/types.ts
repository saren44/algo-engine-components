import { IFile } from "../FileTree/types";


export interface IAssetSelectionModalProps {
	files: IFile;
	onConfirmation: (fileName: string) => void;
}
