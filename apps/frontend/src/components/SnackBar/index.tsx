interface IProps {
    children?: React.ReactNode;
    className?: string;
    text: string;
}
export function SnackBar(props: IProps) {
  const { text } = props;

  return <div>{text}</div>;
}
