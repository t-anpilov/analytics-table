interface Props {
    value: number;
};

export const PercentCell = ({ value }: Props) => {
    return(
        <td className="percentageCell">
            {value} %
        </td>
    );
};
