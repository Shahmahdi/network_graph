import React from 'react';
import { RootNode } from './RootNode';
import { ParentNode } from './ParentNode';
import { Group } from '@visx/group';
import { background, green } from '../configs';

export const Node = ({ node }) => {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) {
    return <RootNode node={node} />;
  }
  if (isParent) {
    return <ParentNode node={node} />;
  }

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        // fill={background}
        fill={node.data.boxType === "tg" ? "#58cae9" : node.data.name ? "lightgreen" : "red"}
        stroke={green}
        strokeWidth={1}
        strokeDasharray="2,2"
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        // fill={green}
        fill="black"
        style={{ pointerEvents: 'none' }}
      >
        {/* {console.log(`node: `, node)} */}
        {node.data.name}
      </text>
    </Group>
  );
};
