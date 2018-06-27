import React from "react";
import PropTypes from "prop-types";

export const JavaScriptLogo = ({ fill, handler }) => {
  return (
    <g
      transform="scale(0.8)translate(-2,0)"
      onClick={handler}
      style={{
        cursor: "pointer"
      }}
    >
      <circle cx="64" cy="64" r="48" fill={fill} />
      <path
        d="M48.4,44.6h8.7v24.5c0,11-5.3,14.9-13.7,14.9c-2.1,0-4.7-0.3-6.4-0.9l1-7.1      c1.2,0.4,2.8,0.7,4.5,0.7c3.7,0,6-1.7,6-7.6L48.4,44.6L48.4,44.6z"
        fill="#323330"
      />
      <path
        d="M64.8,74.4c2.3,1.2,6,2.4,9.7,2.4c4,0,6.1-1.7,6.1-4.3c0-2.4-1.8-3.8-6.5-5.4      c-6.4-2.3-10.7-5.9-10.7-11.6C63.4,49,69,44,78.1,44c4.4,0,7.6,0.9,9.9,2l-2,7c-1.5-0.7-4.3-1.8-8-1.8c-3.8,0-5.6,1.8-5.6,3.7      c0,2.5,2.1,3.6,7.2,5.5c6.8,2.5,10,6.1,10,11.6c0,6.5-4.9,12-15.6,12c-4.4,0-8.8-1.2-11-2.4L64.8,74.4z"
        fill="#323330"
      />
    </g>
  );
};

export default JavaScriptLogo;

JavaScriptLogo.propTypes = {
  fill: PropTypes.string,
  handler: PropTypes.func
};
