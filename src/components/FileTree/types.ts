

export interface IFileTreeProps {
	files: IFile;
	onFileSelection: (fileName: string) => void;
}


export interface IFileIconProps {
	displayType: 'list' | 'grid'
	file: IFile
}


export const mockData : IFile = {
	name: 'root',
	children: [
		{
			name: 'scripts',
			children: [
				{
						name: 'gameManager.alsc',
						content: 'sample content'
				},
				{
					name: 'player.alsc',
					content: 'player sample content'
				},
				{
					name: 'otherScripts',
					children: [
						{
								name: 'asd.alsc',
								content: 'asd content'
						},
						{
							name: 'def.alsc',
							content: 'def content'
						},
						{
							name: 'asd.alsc',
							content: 'asd content'
						},
						{
							name: 'xyz.alsc',
							content: 'xyz content'
						},
						{
							name: 'qwe.alsc',
							content: 'qwe content'
						},
						{
							name: 'rty.alsc',
							content: 'rty content'
						},
					]
				}
			]
		},
		{
			name: 'assets',
			children: [
				{
						name: 'player.png',
						content: './path/to/playerimg'
				},
				{
					name: 'ground.png',
					content: './path/to/groundimg'
				},
			]
		},
		{
			name: 'README.md',
			content: 'hello world'
		}
	]
}


export interface IFile {
	name: string;
	children?: Array<IFile>;
	content?: string;
}
