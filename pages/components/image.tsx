import React from 'react';

const SvgExample = ({ width, height, children }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
    {children}
  </svg>
);

export default ({ children }) => (
  <div style={{ display: 'flex' }}>
    <SvgExample width="200" height="200">
      <circle cx="100" cy="100" r="90" stroke="black" stroke-width="3" fill="red" />
    </SvgExample>
    <SvgExample width="200" height="200">
      <rect width="180" height="180" style={{ fill: 'blue', strokeWidth: '3', stroke: 'black' }} />
    </SvgExample>
  </div>
);