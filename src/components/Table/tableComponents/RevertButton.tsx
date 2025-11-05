import { RevertIcon } from "assets/icons";

interface Props {
    onClickHandler: () => void;
};

export const RevertButton = ({ onClickHandler }: Props) => {
    return (
        <button onClick={onClickHandler} className="revertButton">
            <span>Create new table</span>
            <div className="iconContainer">
                <RevertIcon size={20} />
            </div>
        </button>
    );
};
