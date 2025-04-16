interface buttonProps {
    title?: string,
    variant?: string,
}

export default function Button(props: buttonProps) {
    return (
        <button className="button">{props.title}</button>
    );
}

