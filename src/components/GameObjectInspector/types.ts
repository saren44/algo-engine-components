import { IFile } from "../FileTree/types";

export interface IGameObjectInspectorProps {
	background: IFile;
	pos: IPosition;
	name: string;
	onBackgroundAssetSelect: (file: IFile) => void;
	script: IFile;
	onScriptAssetSelect: (file: IFile) => void;
}


interface IPosition {
	x: number,
	y: number
}