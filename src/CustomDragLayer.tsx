import React from 'react'
import { Card } from "./Card"
import { Column } from "./Column"
import { XYCoord, useDragLayer } from "react-dnd"
import { CustomDragLayerContainer } from "./styles"

function getItemStyles(
  currentOffset: XYCoord | null
): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none"
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging) {
    return null;
  }

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item.type === "COLUMN" ? (
          <Column 
            id={item.id}
            text={item.text}
            index={item.index}
            isPreview={true}
          />
        ) : (
          <Card 
            columnId={item.columnId}
            isPreview={true}
            index={0}
            id={item.id}
            text={item.text}
          />
        )}
        
      </div>      
    </CustomDragLayerContainer>
  ) : null
}