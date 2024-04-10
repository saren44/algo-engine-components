import { IFile } from "../FileTree/types"


export interface ITileInspectorProps {
	pos: IPosition;
	objects: Array<IGameObject>;
	onGameObjectClick: (go: IGameObject) => void;
}



interface IPosition {
	x: number;
	y: number;
}

export interface IGameObject {
	background: IFile;
	name: string;
}