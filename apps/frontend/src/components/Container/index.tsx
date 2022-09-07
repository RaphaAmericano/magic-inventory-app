import cln from "classnames";

import css from "./style.module.scss";

type IProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function Container({ className, ...props }: IProps) {
  return <div {...props} className={cln(css.container, className)} />;
}
