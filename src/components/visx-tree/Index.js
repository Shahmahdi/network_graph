import React, { useMemo } from "react";
import { Tree, hierarchy } from "@visx/hierarchy";
import {
  cafeData,
  boxType,
  cableTypes,
  fiberConnectionUpMediums,
  fiberConnectionUpMediumColors
} from "./Data";
import { LinkHorizontal, LinkHorizontalStep } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { Group } from "@visx/group";
import { defaultMargin, peach, pink, lightpurple } from "./configs";
import { Node } from "./components/Node";

// export type TreeProps = {
//   width: number;
//   height: number;
//   margin?: { top: number; right: number; bottom: number; left: number };
// };

export const NetworkTree = ({ width, height, margin = defaultMargin }) => {
  const data = useMemo(() => hierarchy(cafeData), []);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  const linkTextColor = (link) => {
    if (link.target.data.cableType === cableTypes.fiber) {
      if (
        link.target.data.fiberConnectionUpMedium ===
        fiberConnectionUpMediums.onu
      ) {
        return fiberConnectionUpMediumColors.onu;
      } else if (
        link.target.data.fiberConnectionUpMedium === fiberConnectionUpMediums.mc
      ) {
        return fiberConnectionUpMediumColors.mc;
      } else {
        return "black";
      }
    } else if (
      link.target.data.cableType === cableTypes.cat5 ||
      link.target.data.cableType === cableTypes.cat4
    ) {
      return fiberConnectionUpMediumColors.cat5;
    } else {
      return "black";
    }
  };

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id='lg' from={peach} to={pink} />
      <Tree root={data} size={[yMax, xMax]}>
        {(tree) => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => {
              const { source, target } = link;
              const midX = (source.x + target.x) / 2 - 5;
              const midY = (source.y + target.y) / 2;
              return (
                <React.Fragment key={`link-${i}`}>
                  {link.source.data.boxType === boxType.tgBoxWithSplitter ? (
                    <>
                      <LinkHorizontalStep
                        data={link}
                        stroke={lightpurple}
                        percent={0.3}
                        strokeWidth='1'
                        fill='none'
                        strokeDasharray={
                          link.target.data.cableType === cableTypes.fiber
                            ? "6,2"
                            : undefined
                        }
                      />
                      <text
                        fill={linkTextColor(link)}
                        x={target.y - 60}
                        y={target.x - 5}
                        dy='0.2em'
                        fontSize={10}
                        angle='rotate'>
                        {link.target.data.cableType && "300m"}
                      </text>
                    </>
                  ) : (
                    <>
                      <LinkHorizontal
                        data={link}
                        stroke={lightpurple}
                        strokeWidth='1'
                        fill='none'
                        strokeDasharray={
                          link.target.data.cableType === cableTypes.fiber
                            ? "8,4"
                            : undefined
                        }
                      />
                      <text
                        fill={linkTextColor(link)}
                        textAnchor='middle'
                        x={midY}
                        y={midX}
                        dy='0.2em'
                        fontSize={10}
                        angle='rotate'>
                        300m
                      </text>
                    </>
                  )}
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
