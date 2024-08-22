export interface Element {
    id: number;
    x: number;
    y: number;
    width: number | string;
    height: number | string;
    content: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: number;
    fontSize?: number;
    fontWeight?: string;
    padding?: number;
    borderEnabled?: boolean;
    strockColor?: string;
    borderStroke?: string;
    boxShadow?: string;
    imagePreview?: string;
    borderColor?: string;
    borderWidth?: number;
    strockHeight?: number | string;
    name?: string;
    value?: string;
    imageUrl?: string;
  }

  export interface IRNDElement {
    isPortrait: React.ComponentState;
    elements: Element[];
    zoomLevel: number;
    handleDrag: (x: number, y: number) => void;
    handleDragStop: (id: number, x: number, y: number) => void;
    setSelectedElementId: React.ComponentState;
    handleResizeStop: (id: number, x: number, y: number) => void;
    handleContentChange?: (
      e: React.FormEvent<HTMLDivElement>,
      id: number
    ) => void;
    guideLines: React.ComponentState;
    setElements: React.ComponentState;
  }