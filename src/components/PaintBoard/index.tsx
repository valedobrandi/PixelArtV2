import { useState } from "react";
import { Board, Container, LefthBar, Pixel, PixelPaintBoard, RigthBar } from "./styled";
import ColorsPallet from "../ColorsPallet";
import SelectPics from "../SelectPics";


export default function PaintBoard({children, setSelectPics}:
    {children: React.ReactNode;
     setSelectPics: (state: string) => void}) {
        
        const [paint, setPaint] = useState(false)
        const [appState, setAppState] = useState('')
        

        function handleDoubleClick(event: React.MouseEvent<HTMLLIElement>) {
            if (paint) {
            (event.target as HTMLElement).style.backgroundColor = appState}
        }

        function handleClick(event: React.MouseEvent<HTMLLIElement>) {
            (event.target as HTMLElement).style.backgroundColor = appState
        }

    return (
        <Container>
            <LefthBar>
            <ColorsPallet setAppState={setAppState}/>
            </LefthBar>
            <PixelPaintBoard>
        {Array.from({length: 92}, (_, ulIndex) => (
            <Board key={ulIndex}>
                {Array.from({length: 120}, (_, liLndex) => (
                 <Pixel
                 key={`${ulIndex}${liLndex}`}
                 onMouseEnter={(e) => handleDoubleClick(e)} 
                 onDoubleClick={() => setPaint(!paint)}
                 onClick={(e) => handleClick(e)}   
                 >
                 </Pixel> ))}
            </Board>
        ) )}
                {children}
            </PixelPaintBoard>
            <RigthBar>
                    <SelectPics setSelectPics={setSelectPics} />
            </RigthBar>
        </Container>
    )
}