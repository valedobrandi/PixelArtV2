import styled from './index.module.css'
import { colors } from "../../utils/colors";
import { Color } from "./styled";
import { CgErase } from "react-icons/cg";
import { HiOutlineDocument } from "react-icons/hi2";

export default function ColorsPallet({
  setAppState,
}: {
  setAppState: (state: string) => void;
}) {
  function handleAddColorClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAppState(
      window.getComputedStyle(event.target as HTMLElement).backgroundColor
    );
  }
  function handleClearColorClick() {
    document
      .querySelectorAll("li")
      .forEach((element) => (element.style.backgroundColor = ""));
  }




  return (
    <>
      <div className={styled.tools}>
        <fieldset>
        <legend>clear</legend>
      <div onClick={() => handleClearColorClick()}><HiOutlineDocument /></div>
        </fieldset>
        <fieldset>
        <legend>erase</legend>
      <div onClick={() => setAppState('')}><CgErase /></div>
      </fieldset>
      </div>
      {colors.map((color, index) => (
        <div key={index}>
          <Color
            onClick={(event) => handleAddColorClick(event)}
            style={{ backgroundColor: color.dark }}
          ></Color>
          <Color
            onClick={(event) => handleAddColorClick(event)}
            style={{ backgroundColor: color.medium }}
          ></Color>
          <Color
            onClick={(event) => handleAddColorClick(event)}
            style={{ backgroundColor: color.light }}
          ></Color>
        </div>
      ))}
    </>
  );
}
