import React, { useMemo } from 'react';
import { Tree, hierarchy } from '@visx/hierarchy';
import { rawData, boxType } from './Data';
import { LinkHorizontal, LinkHorizontalStep } from '@visx/shape';
import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { defaultMargin, peach, pink, lightpurple } from "./configs";
import { Node } from "./components/Node";

// export type TreeProps = {
//   width: number;
//   height: number;
//   margin?: { top: number; right: number; bottom: number; left: number };
// };

export const NetworkTree = ({ width, height, margin = defaultMargin }) => {
  const data = useMemo(() => hierarchy(rawData), []);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="lg" from={peach} to={pink} />
      {/* <rect width={width} height={height} rx={14} fill={background} /> */}
      <Tree root={data} size={[yMax, xMax]}>
        {(tree) => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => {
              // console.log(`link: `, link);
              const { source, target } = link;
              const midX = (source.x + target.x) / 2;
              const midY = (source.y + target.y) / 2;
              return (
              <React.Fragment key={`link-${i}`}>
                {link.source.data.boxType === boxType.tgBoxWithSplitter ?
                <>
                <LinkHorizontalStep
                  data={link}
                  stroke={lightpurple}
                  percent={0.3}
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray={link.target.data.cableType === "fiber" ? "8,4" : undefined}
                />
                <text
                  fill="red"
                  textAnchor="middle"
                  x={midY}
                  y={midX}
                  dy="0.2em"
                  fontSize={10}
                  angle="rotate"
                >
                  {link.target.data.name ? `${link.source.data.name} to ${link.target.data.name}` : ""}
                </text>
                </>
                : <>
                <LinkHorizontal
                  // key={`link-${i}`}
                  data={link}
                  stroke={lightpurple}
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray={link.target.data.cableType === "fiber" ? "8,4" : undefined}
                />
                <text
                  fill="red"
                  textAnchor="middle"
                  x={midY}
                  y={midX}
                  dy="0.2em"
                  fontSize={10}
                  angle="rotate"
                >
                  {link.target.data.name ? `${link.source.data.name} to ${link.target.data.name}` : ""}
                </text>
                </>}
              </React.Fragment>
              );
            })}
            {tree.descendants().map((node, i) => (
              <Node key={`node-${i}`} node={node} />
            ))}
          </Group>
        )}
      </Tree>
    </svg>
  );
};
