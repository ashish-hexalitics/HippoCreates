
export interface TemplateStyle {
  fontWeight?: string;
  labelsFontWeight?: string;
  SectionBgColor?: string;
  SectionTextAlignMent?: string;
  SectionBorder?: string;
  SectionBorderColor?: string;
  SectionBorderWidth?: string;
  SectionLabelUnderline?: string;
  showDot?: string;
  labelStyleForAll?: string;
  paddingPosition?: string;
  listItemsColor?: string;
  listItemsFontSize?: number;
  listItemsFontWeight?: string;
  listItemType?: string;
  listItemTextDecoration?: string;
  listDirection?: string;
  listAlignment?: string;
  paddingPx?: string;
  fontSize?: number;
  color?: string;
  labelsColor?: string;
  ShowlabelsColor?: string;
  ShowSectionBgColor?: string;
  labelsFontSize?: number;
  backgroundColor?: string;
  // education?: {
  // };
  educationTemplate?: string;
  educationTemplateString?: string;
  showEducationStartOrEndDate?: string;
  showInstituteName?: string;
  showCourseName?: string;
  showEmploymentStartOrEndDate?: boolean;
  showCompanyName: boolean;
  // employment?: {
  // };
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
  sectionType?: string;
}

export interface TemplateSideBarProps {
  element: TemplateStyle | undefined;
  onChange: (data: Partial<TemplateStyle>) => void;
  addElement?: (el: { name: string; value: string }) => void;
  openThirdPartyUpload?: (value: string) => void;
  roleName: string | null;
  addSection?: (el: {
    label: string;
    tag: string;
    sectionType: string;
  }) => void;
  handleCopyStyle?: (applyOn: string) => void;
}

export interface ITopBar {
  addElement?: (el: { name: string; value: string }) => void;
  openThirdPartyUpload?: (imageSrc: string) => void;
  toggleOrientation: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  zoomLevel: number;
  setIsModalOpen: React.ComponentState;
  isPortrait: React.ComponentState;
  onUpload?: (file: File) => void;
  addShape?: (shape: string) => void;
  setIsViewModalOpen: React.ComponentState;
  roleName: string | null;
}
