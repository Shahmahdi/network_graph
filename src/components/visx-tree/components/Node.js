import React from "react";
import { RootNode } from "./RootNode";
import { ParentNode } from "./ParentNode";
import { Group } from "@visx/group";
import { boxTypeColor, boxType } from "../Data";

export const Node = ({ node }) => {
  const isRoot = node.depth === 0;
  const isParent = !!node.children;
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  if (isRoot) {
    return <RootNode node={node} />;
  }
  if (isParent) {
    return <ParentNode node={node} />;
  }

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
      {node.data.name ? (
        <foreignObject
          fontSize={9}
          x={centerX}
          y={centerY}
          width='50'
          height='100%'>
          <defs>
            <filter
              x='0'
              y='0'
              width='1'
              height='1'
              id={`solid_${node.data.id}`}>
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
            style={{ backgroundColor: getBgColor(), wordBreak: "break-word" }}>
            {node.data.name}
          </text>
        </foreignObject>
      ) : (
        <rect
          height={20}
          width={40}
          y={-10}
          x={0}
          fill={boxTypeColor.none}
          strokeWidth={1}
          strokeDasharray='2,2'
          strokeOpacity={0.6}
          rx={10}
          onClick={() => {
            alert(`clicked: ${JSON.stringify(node.data.name)}`);
          }}
        />
      )}
    </Group>
  );
};
