import { Picture } from "./styled";

export default function PaintPicture(
    {selectPics}:
    {selectPics: string}) {
    return (
        <Picture src={selectPics} alt=""/>
    )
}