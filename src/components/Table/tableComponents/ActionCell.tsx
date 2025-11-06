import { useTableContext } from 'context';

interface Props {
    index: number;
}

export const ActionCell = ({ index }: Props) => {
    const { removeRow } = useTableContext();

    return (
        <div className="actionCell">
            <p>Group {index + 1}</p>
            <div className="removeButtonContainer">
                <button onClick={() => removeRow(index)} className="removeButton">
                    Remove
                </button>
            </div>
        </div>
    );
};
