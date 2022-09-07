import { forwardRef } from "react";
import cln from "classnames";

import style from "./style.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primary" | "secondary" | "link";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

function ButtonComp(props: IProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { children, className, theme, icon, iconPosition, ...restProps } = props;
  const classNameList = [style.button, style[theme], { [style.onlyIcon]: !children && icon }, className];

  return (
    <button ref={ref} {...restProps} className={cln(classNameList)}>
      {icon && iconPosition === "left" && icon}
      {children && <span>{children}</span>}
      {icon && iconPosition !== "left" && icon}
    </button>
  );
}

export const Button = forwardRef<HTMLButtonElement, IProps>(ButtonComp);
