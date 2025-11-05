import { useTableContext } from "context";

interface Props {
    index: number;
};

export const ActionCell = ({ index }: Props) => {

    const { removeRow } = useTableContext();

    return(
        <td>
            <p>
                Cell Value M={index + 1}
            </p>
            <div className="removeButtonContainer">
                <button
                    onClick={() => removeRow(index)}
                    className="removeButton"
                >
                    Remove Row
                </button>
            </div>
        </td>
    );
};
