import React, { useMemo } from "react";
import { Tree, hierarchy } from "@visx/hierarchy";
import {
  // cafeData,
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
import { Zoom } from "@visx/zoom";
import { localPoint } from "@visx/event";

// export type TreeProps = {
//   width: number;
//   height: number;
//   margin?: { top: number; right: number; bottom: number; left: number };
// };

export const NetworkTree = ({ width, height, margin = defaultMargin, networkData }) => {
  const data = useMemo(() => hierarchy(networkData), [networkData]);
  // const [showMiniMap, setShowMiniMap] = useState(true);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  // const initialTransform = {
  //   scaleX: 1.27,
  //   scaleY: 1.27,
  //   translateX: -211.62,
  //   translateY: 162.59,
  //   skewX: 0,
  //   skewY: 0
  // };

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
      // return fiberConnectionUpMediumColors.cat5;
      return "red";
    } else {
      return "black";
    }
  };

  return width < 10 ? null : (
    <div>
      <Zoom
        width={width}
        height={height}
        scaleXMin={1 / 4}
        scaleXMax={4}
        scaleYMin={1 / 4}
        scaleYMax={4}
        // initialTransformMatrix={initialTransform}
        component="div"
      >
        {(zoom) => (
          <div className='relative'>
            <svg
              width={width}
              height={height}
              style={{
                cursor: zoom.isDragging ? "grabbing" : "grab",
                touchAction: "none"
              }}
              ref={zoom.containerRef}>
              <LinearGradient id='lg' from={peach} to={pink} />
              <g transform={zoom.toString()}>
                <Tree root={data} size={[yMax, xMax]}>
                  {(tree) => (
                    <Group top={margin.top} left={margin.left}>
                      {tree.links().map((link, i) => {
                        const { source, target } = link;
                        const midX = (source.x + target.x) / 2 - 5;
                        const midY = (source.y + target.y) / 2;
                        return (
                          <React.Fragment key={`link-${i}`}>
                            {link.source.data.boxType ===
                            boxType.tgBoxWithSplitter ? (
                              <>
                                <LinkHorizontalStep
                                  data={link}
                                  stroke={lightpurple}
                                  percent={0.3}
                                  strokeWidth='1'
                                  fill='none'
                                  strokeDasharray={
                                    link.target.data.cableType ===
                                    cableTypes.fiber
                                      ? "6,2"
                                      : undefined
                                  }
                                />
                                <text
                                  is="x3d"
                                  fill={linkTextColor(link)}
                                  x={target.y - 80}
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
                                    link.target.data.cableType ===
                                    cableTypes.fiber
                                      ? "8,4"
                                      : undefined
                                  }
                                />
                                <text
                                  is="x3d"
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
              </g>
              <rect
                width={width}
                height={height}
                rx={14}
                fill='transparent'
                onTouchStart={zoom.dragStart}
                onTouchMove={zoom.dragMove}
                onTouchEnd={zoom.dragEnd}
                onMouseDown={zoom.dragStart}
                onMouseMove={zoom.dragMove}
                onMouseUp={zoom.dragEnd}
                onMouseLeave={() => {
                  if (zoom.isDragging) {
                    zoom.dragEnd();
                  }
                }}
                onDoubleClick={(event) => {
                  const point = localPoint(event) || { x: 0, y: 0 };
                  zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
                }}
              />
              {/* {showMiniMap && (
                <g
                  clipPath='url(#zoom-clip)'
                  transform={`
                    scale(0.25)
                    translate(${width * 4 - width - 60}, ${
                    height * 4 - height - 60
                  })
                  `}>
                  <rect width={width} height={height} fill='#1a1a1a' />
                  <Tree root={data} size={[yMax, xMax]}>
                    {(tree) => (
                      <Group top={margin.top} left={margin.left}>
                        {tree.links().map((link, i) => {
                          const { source, target } = link;
                          const midX = (source.x + target.x) / 2 - 5;
                          const midY = (source.y + target.y) / 2;
                          return (
                            <React.Fragment key={`link-${i}`}>
                              {link.source.data.boxType ===
                              boxType.tgBoxWithSplitter ? (
                                <>
                                  <LinkHorizontalStep
                                    data={link}
                                    stroke={lightpurple}
                                    percent={0.3}
                                    strokeWidth='1'
                                    fill='none'
                                    strokeDasharray={
                                      link.target.data.cableType ===
                                      cableTypes.fiber
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
                                      link.target.data.cableType ===
                                      cableTypes.fiber
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
                  <rect
                    width={width}
                    height={height}
                    fill='white'
                    fillOpacity={0.2}
                    stroke='white'
                    strokeWidth={4}
                    transform={zoom.toStringInvert()}
                  />
                </g>
              )} */}
            </svg>
            <div className='controls'>
              <button
                type='button'
                className='btn btn-zoom'
                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}>
                +
              </button>
              <button
                type='button'
                className='btn btn-zoom btn-bottom'
                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}>
                -
              </button>
              <button
                type='button'
                className='btn btn-lg'
                onClick={zoom.center}>
                Center
              </button>
              <button type='button' className='btn btn-lg' onClick={zoom.reset}>
                Reset
              </button>
              <button type='button' className='btn btn-lg' onClick={zoom.clear}>
                Clear
              </button>
            </div>
            {/* <div className='mini-map'>
              <button
                type='button'
                className='btn btn-lg'
                onClick={() => setShowMiniMap(!showMiniMap)}>
                {showMiniMap ? "Hide" : "Show"} Mini Map
              </button>
            </div> */}
          </div>
        )}
      </Zoom>
      <style>{`
        .btn {
          margin: 0;
          text-align: center;
          border: none;
          background: #2f2f2f;
          color: #888;
          padding: 0 4px;
          border-top: 1px solid #0a0a0a;
        }
        .btn-lg {
          font-size: 12px;
          line-height: 1;
          padding: 4px;
        }
        .btn-zoom {
          width: 26px;
          font-size: 22px;
        }
        .btn-bottom {
          margin-bottom: 1rem;
        }
        .description {
          font-size: 12px;
          margin-right: 0.25rem;
        }
        .controls {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .mini-map {
          position: absolute;
          bottom: 25px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .relative {
          position: relative;
        }
      `}</style>
    </div>
  );
};
