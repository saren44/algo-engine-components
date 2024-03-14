

export interface IImageImporterProps {
	importCallback: () => void;
}

export interface IStyledImageImporterprops {
  $horizontal: boolean;
}

export type imageSliceType = 'single' | 'multiple'