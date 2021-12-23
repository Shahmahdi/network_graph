import React from 'react';
import { Group } from '@visx/group';

export const RootNode = ({ node }) => {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height;
  return (
    <Group top={node.x} left={node.y}>
      <foreignObject
        fontSize={9}
        x={centerX}
        y={centerY}
        width='50'
        height='100%'>
        {/* <defs>
          <filter x='0' y='0' width='1' height='1' id={`solid_${node.data.id}`}>
            <feFlood floodColor="#8aff0a" result='bg' />
            <feMerge>
              <feMergeNode in='bg' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs> */}
        <text
          is="x3d"
          filter={`url(#solid_${node.data.id})`}
          fontSize={9}
          fontFamily='Arial'
          textAnchor='left'
          style={{ backgroundColor: "#dd0000", color: "white" }}
        >
          {node.data.name}
        </text>
      </foreignObject>
    </Group>
  );
};
