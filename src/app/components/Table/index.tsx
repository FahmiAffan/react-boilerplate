interface props {
    header?: any[],
    data?: any[],
}

export default function Table(props: props) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        props.header?.map((value, index) => (
                            <th key={index}>{value}</th>
                        ))
                    }
                </tr>

            </thead>
            <tbody>
                {
                    props.data?.map((item, rowIndex) => (
                        <tr key={`row-${rowIndex}`}>
                            {
                                Object.keys(item).map((val, colIndex) => (
                                    <td key={colIndex}>{item}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
