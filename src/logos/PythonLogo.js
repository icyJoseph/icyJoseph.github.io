import React from "react";
import PropTypes from "prop-types";

const PythonLogo = ({ fill, handler }) => {
  return (
    <g
      transform="scale(0.48)translate(40, 42)"
      onClick={handler}
      style={{
        cursor: "pointer"
      }}
      fillRule="evenodd"
    >
      <circle fill={fill} cx="65" cy="65" r="80" />
      <g fillRule="nonzero">
        <path
          d="M36.3454396,46.4313833 L59.4859996,46.4313833 C65.9473247,46.4313833 70.455226,41.0219017 70.455226,34.5605765 L70.455226,12.772387 C70.455226,6.61158856 65.4965346,1.95342389 59.1854728,0.901580258 C55.1283617,0.300526753 51.2215139,0 47.3146661,0 C43.4078183,0 39.9517606,0.300526753 36.6459664,0.901580258 C26.8788469,2.5544774 25.5264765,6.16079843 25.5264765,12.772387 L25.5264765,20.8866093 L48.065983,20.8866093 L48.065983,23.8918768 L24.7751596,23.8918768 L16.0598838,23.8918768 C9.29803188,23.8918768 3.43776021,28.0992514 1.63459969,35.7626836 C-0.469087574,44.4779594 -0.61935095,49.8874409 1.63459969,58.9032435 C3.28749683,65.6650954 7.19434462,70.4735235 13.9561965,70.4735235 L22.521209,70.4735235 L22.521209,60.4058773 C22.3709456,52.8927085 28.3814807,46.4313833 36.3454396,46.4313833 Z M34.8428059,15.6273911 C32.4385918,15.6273911 30.4851679,13.6739672 30.4851679,11.2697532 C30.4851679,8.8655392 32.4385918,6.91211531 34.8428059,6.91211531 C37.2470199,6.91211531 39.2004438,8.8655392 39.2004438,11.2697532 C39.2004438,13.6739672 37.2470199,15.6273911 34.8428059,15.6273911 Z"
          fill="#3D8AC8"
          transform="translate(16.000000, 16.000000)"
        />
        <path
          d="M94.1968395,35.7626836 C92.5439423,29.151095 89.3884114,23.8918768 82.6265595,23.8918768 L73.4604936,23.8918768 L73.4604936,34.5605765 C73.4604936,42.5245355 67.1494318,49.4366508 59.4859996,49.4366508 L36.3454396,49.4366508 C30.0343778,49.4366508 25.3762131,54.5456056 25.3762131,60.706404 L25.3762131,82.4945936 C25.3762131,88.655392 30.4851679,92.4119764 36.6459664,94.2151369 C44.0088718,96.3188242 50.6204604,96.7696143 59.3357362,94.2151369 C65.1960079,92.5622398 70.455226,89.1061821 70.455226,82.4945936 L70.455226,73.478791 L47.9157196,73.478791 L47.9157196,70.4735235 L71.0562795,70.4735235 L82.6265595,70.4735235 C89.3884114,70.4735235 91.9428888,65.9656222 94.1968395,58.9032435 C96.6010535,51.8408648 96.6010535,44.9287495 94.1968395,35.7626836 Z M60.8383699,79.6395894 C63.242584,79.6395894 65.1960079,81.5930133 65.1960079,83.9972273 C65.1960079,86.4014414 63.242584,88.3548653 60.8383699,88.3548653 C58.4341559,88.3548653 56.480732,86.4014414 56.480732,83.9972273 C56.480732,81.5930133 58.5844193,79.6395894 60.8383699,79.6395894 Z"
          fill="#FBC02D"
          transform="translate(16.000000, 16.000000)"
        />
      </g>
    </g>
  );
};

PythonLogo.propTypes = {
  fill: PropTypes.string,
  handler: PropTypes.func
};

export default PythonLogo;
