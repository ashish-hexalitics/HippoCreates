import { Element } from "../../../dto/element.dto";
import { Icon } from "@iconify-icon/react";

interface IconProps {
  element: Element;
}
function Icons({ element }: IconProps) {
  const iconName = element.content.split("~")[1];
  const iconStyle = {
    color: element.color || "black",
    width: element.color || 24,
    height: element.color || 24,
  };
  return (
    <div style={{color:iconStyle.color}}>
      <Icon icon={iconName} width={iconStyle.width} height={iconStyle.height} />
    </div>
  );
}

export default Icons;
