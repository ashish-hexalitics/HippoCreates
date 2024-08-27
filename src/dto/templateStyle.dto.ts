export interface TemplateStyle {
  fontWeight?: string;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  x: number;
  y: number;
  content: string;
  padding?: number;
  borderRadius?: number;
  borderColor?: string;
  strockColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  imageUrl?: string;
  width?: number | string;
  height?: number | string;
  strockHeight?: number | string;
  borderEnabled?: boolean;
  value?: string;
  opacity?: number;
  filter?: string;
  overlay?: boolean;
  blur?: number;
}

export interface TemplateSideBarProps {
  element: TemplateStyle | undefined;
  onChange: (data: Partial<TemplateStyle>) => void;
  addElement?: (el: { name: string; value: string }) => void;
  openThirdPartyUpload?: (value: string) => void;
}

export interface ITopBar {
  addElement?: (el: { name: string; value: string }) => void;
  openThirdPartyUpload: (imageSrc: string) => void;
  toggleOrientation: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  zoomLevel: number;
  setIsModalOpen: React.ComponentState;
  isPortrait: React.ComponentState;
  onUpload: (file: File) => void;
  addShape: (shape: string) => void;
  setIsViewModalOpen: React.ComponentState;
}
