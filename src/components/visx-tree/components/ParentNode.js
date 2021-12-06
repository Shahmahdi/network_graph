import React from 'react';
import { Group } from '@visx/group';
import { background, blue, white } from '../configs';

export const ParentNode = ({ node }) => {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        // fill={background}
        fill={node.data.boxType === "tg" ? "#58cae9" : "lightgreen"}
        stroke={blue}
        strokeWidth={1}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      {/* {console.log(`parent node: `, node)} */}
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={white}
      >
        {node.data.name}
      </text>
    </Group>
  );
};
