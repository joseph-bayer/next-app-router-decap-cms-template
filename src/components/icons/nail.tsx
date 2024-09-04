import { SVGAttributes } from "react";

export default function NailSVG(props: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 158.63" {...props}>
      <path
        d="m32.25,73.1l-10.25,26.71,10.5,31.29-4.12,27.53,23.12-38.53-7-22.29s13.25-28.71,12.25-25.71l-24.5,1Z"
        fill={props.fill}
        stroke={props.stroke}
      />
      <ellipse
        cx="51.5"
        cy="39"
        rx="51.5"
        ry="39"
        fill={props.fill}
        stroke={props.stroke}
      />
    </svg>
  );
}