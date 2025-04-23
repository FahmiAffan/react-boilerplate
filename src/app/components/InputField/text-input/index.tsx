interface props {
  title?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Button(props: props) {
  return (
    <input
      type={props.type || "text"}
      onChange={props.onChange}
      name={props.title}
      className="input"
      placeholder={props.title}
      value={props.value}
    />
  );
}
