export interface Image {
  url: string;
  group: string;
}

export interface Subject {
  id: number | string;
  name: string;
  label: string;
  images: Image[];
}

export interface Data {
  subjects: Subject[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  selected: boolean;
  boxStyles?: any;
  style?: any;
}

export interface GalleryProps {
  children?: React.ReactNode;
  view: Data;
}

type onImageClick = (image: Image) => void;

export interface ImageContainerProps {
  data: Image[];
  onImageClick: onImageClick;
}

export interface ImageGroup {
  [group: string]: Image[];
}

export interface ImageGroupContainerProps {
  images: Image[];
  onImageClick: onImageClick;
}
