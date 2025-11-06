interface Props {
    onClickHandler: (columns: number) => void;
    columns: number | '';
}

export const AddButton = ({ onClickHandler, columns }: Props) => {
    return (
        <button
            onClick={() => {
                if (columns) {
                    onClickHandler(columns);
                }
                return;
            }}
            className="addButton"
        >
            Add New Row
        </button>
    );
};
