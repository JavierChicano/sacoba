import React, { FC, SVGProps } from "react";

interface IconoCopyrightProps extends SVGProps<SVGSVGElement> {
  size?: number;
  height?: number;
  width?: number;
}

export const IconoCopyright: FC<IconoCopyrightProps> = ({
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      className="cursor-pointer"
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path
        d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
        stroke="currentColor"
      />
      <path
        d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"
        stroke="currentColor"
      />
    </svg>
  );
};
