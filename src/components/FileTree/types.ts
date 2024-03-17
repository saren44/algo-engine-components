

export interface IFileTreeProps {
	files: IFile;
	displayType: 'list' | 'grid';
	onFileSelection: (file: IFile) => void;
}


export interface IFileIconProps {
	displayType: 'list' | 'grid'
	file: IFile
}


export const mockData : IFile = {
	fileName: 'root',
	content: [
		{
			fileName: 'scripts',
			content: [
				{
						fileName: 'gameManager.alsc',
						content: 'sample content'
				},
				{
					fileName: 'player.alsc',
					content: 'player sample content'
				},
			]
		},
		{
			fileName: 'assets',
			content: [
				{
						fileName: 'player.png',
						content: './path/to/playerimg'
				},
				{
					fileName: 'ground.png',
					content: './path/to/groundimg'
				},
			]
		},
		{
			fileName: 'README.md',
			content: 'hello world'
		}
	]
}


export interface IFile {
	fileName: string;
	content: string | Array<IFile>;
}
