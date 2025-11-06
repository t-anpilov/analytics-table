interface Props {
    value: number;
    heat: number;
}

export const PercentCell = ({ value, heat }: Props) => {
    return (
        <td
            className="percentageCell"
            style={{ '--alpha': (heat / 100) * 0.6 } as React.CSSProperties}
        >
            <span>{value} %</span>
        </td>
    );
};
