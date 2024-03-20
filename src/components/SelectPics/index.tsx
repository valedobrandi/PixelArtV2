export default function SelectPics({setSelectPics}) {
  const pics = ['montanha.svg', "dinosaure-09.jpg", "trotro.jpg", "miraculous.jpg"];
  return (
    <>
      {pics.map((pic) => (
        <img
        onClick={(e) => setSelectPics((e.target as HTMLImageElement).src)}
         key={pic}
          src={pic}
           style={{ width: "100px", height: "100px" }} />
      ))}
    </>
  );
}
