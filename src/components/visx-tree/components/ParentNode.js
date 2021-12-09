import React from "react";
import { Group } from "@visx/group";
import { boxTypeColor, boxType } from "../Data";

export const ParentNode = ({ node }) => {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2 + 5;

  const getBgColor = () => {
    if (node.data.boxType === boxType.tg) {
      return boxTypeColor.tg;
    } else if (node.data.boxType === boxType.box) {
      return boxTypeColor.box;
    } else if (node.data.boxType === boxType.tgBoxWithSplitter) {
      return boxTypeColor.tgBoxWithSplitter;
    } else if (node.data.boxType === boxType.userHome) {
      return boxTypeColor.userHome;
    } else {
      return "white";
    }
  };

  return (
    <Group top={node.x} left={node.y}>
      <foreignObject
        fontSize={9}
        x={centerX}
        y={centerY}
        width='80'
        height='100%'>
        <defs>
          <filter x='0' y='0' width='1' height='1' id={`solid_${node.data.id}`}>
            <feFlood floodColor={getBgColor()} result='bg' />
            <feMerge>
              <feMergeNode in='bg' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <text
          filter={`url(#solid_${node.data.id})`}
          fontSize={9}
          fontFamily='Arial'
          textAnchor='left'
          style={{ backgroundColor: getBgColor() }}
        >
          {node.data.name}
        </text>
      </foreignObject>
    </Group>
  );
};
