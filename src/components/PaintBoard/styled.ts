import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`
export const PixelPaintBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Board = styled.ul`
display: flex;
flex-wrap: nowrap;
margin: 0;
padding: 0;
`

export const Pixel = styled.li`
list-style: none;
margin: 0;
padding: 0;
width: 8px;
height: 8px;
`

export const RigthBar = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 1rem;
align-items: center;
width: 200px;
border-left: 1px solid black;
box-shadow: -5px 0px 5px -2px rgba(0,0,0,0.3);
`
export const LefthBar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
border-right: 1px solid black;
box-shadow: 5px 0px 5px -2px rgba(0,0,0,0.3);
`