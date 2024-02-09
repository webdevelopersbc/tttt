// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpinIcon(props: SpinIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-7 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.08 14.04l4-1.04c.44-.12.72-.56.6-1.04a.847.847 0 00-1.04-.6l-2.08.56c.68-.88 1.56-1.6 2.64-2.08 1.64-.72 3.44-.76 5.12-.12A6.75 6.75 0 0115 13.24c.2.44.68.6 1.12.44.44-.2.6-.68.44-1.12-.88-2.04-2.52-3.6-4.6-4.44-2.08-.8-4.36-.76-6.4.12-1.36.6-2.48 1.52-3.36 2.68l-.52-1.96a.847.847 0 00-1.04-.6c-.44.12-.72.56-.6 1.04l1.04 4c.12.56.4.8 1 .64zm15.64 8.48l-1.04-3.96s-.16-.8-.96-.6l-4 1.04c-.44.12-.72.56-.6 1.04.12.44.56.72 1.04.6l2.08-.56a6.62 6.62 0 01-7.72 2.16 6.75 6.75 0 01-3.68-3.52c-.2-.44-.68-.6-1.12-.44-.44.2-.6.68-.44 1.12.88 2.04 2.52 3.6 4.6 4.44 1 .4 2 .56 3.04.56 2.64 0 5.12-1.24 6.72-3.4l.52 1.96c.08.36.44.64.8.64.08 0 .16 0 .2-.04.4-.16.68-.6.56-1.04z"
        }
      ></path>
    </svg>
  );
}

export default SpinIcon;
/* prettier-ignore-end */
