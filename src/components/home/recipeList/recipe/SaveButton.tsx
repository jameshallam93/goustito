import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export type SaveButtonProps = {
	onClick: (event: React.MouseEvent) => void,
	isSaved: boolean
}

const SaveButton: React.FunctionComponent<SaveButtonProps> = ({ onClick, isSaved }) => {
	return (
		<div onClick={onClick}>
			{
				isSaved ?
					<AiFillStar />
					:
					<AiOutlineStar />
			}
		</div>
	);
};


export { SaveButton };