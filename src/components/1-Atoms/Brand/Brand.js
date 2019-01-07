import React from "react";
import "./Brand.css";

export default function Brand({title}) {
  const width = 177;
  const height = 100;
  const l = width + width * 2 / Math.sqrt(2);
  return (
    <div className="brand">
      <svg className="brand__svg" width={l} height={l} viewBox={`0 0 ${l} ${l}`}>
        <g transform="translate(0, 0)">
          <g transform={`rotate(0, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--1" stroke="null" fill="#030033" x="125" y="0" width={width} height={height}
                  id="svg_5" rx="20"/>
          </g>
          <g transform={`rotate(45, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--2" stroke="null" fill="#070056" x="125" y="0" width={width} height={height}
                  id="svg_1" rx="20"/>
          </g>
          <g transform={`rotate(90, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--3" stroke="null" fill="#0303af" x="125" y="0" width={width} height={height}
                  id="svg_3" rx="20"/>
          </g>
          <g transform={`rotate(135, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--4" stroke="null" fill="#1447ff" x="125" y="0" width={width} height={height}
                  id="svg_8" rx="20"/>
          </g>
          <g transform={`rotate(180, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--5" stroke="null" fill="#0f7bff" x="125" y="0" width={width} height={height}
                  id="svg_4" rx="20"/>
          </g>
          <g transform={`rotate(225, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--6" stroke="null" fill="#5eaeff" x="125" y="0" width={width} height={height}
                  id="svg_2" rx="20"/>
          </g>
          <g transform={`rotate(270, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--7" stroke="null" fill="#91d4ff" x="125" y="0" width={width} height={height}
                  id="svg_7" rx="20"/>
          </g>
          <g transform={`rotate(315, ${l/2}, ${l/2})`}>
            <rect className="brand__rect brand__rect--8" stroke="null" fill="#000000" x="125" y="0" width={width} height={height}
                  id="svg_6" rx="20"/>
            <rect className="brand__rect brand__rect--8" stroke="null" fill="#000000" x="125" y="0" width="80" height={height}
                  id="svg_9" rx="20"/>
          </g>
        </g>
      </svg>
      <div className="brand__name">
        <div>{title}</div>
      </div>
    </div>
  );
  }
