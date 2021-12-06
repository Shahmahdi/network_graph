import React from 'react';
import { Group } from '@visx/group';
import { plum } from '../configs';

export const RootNode = ({ node }) => {
  return (
    <Group top={node.x} left={node.y}>
      <circle r={12} fill="url('#lg')" />
      <text
        dy=".33em"
        fontSize={14}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        // fill={plum}
      >
        {node.data.name}
      </text>
      <text
        dy="1.5em"
        fontSize={14}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={plum}
      >
        Main router
      </text>
    </Group>
  );
};
