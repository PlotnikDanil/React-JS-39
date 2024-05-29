import { useId } from "react";
import data from "./data";

export default function DrawingList() {
  const id = useId();

  return (
    <>
      {data.map((element) => (
        <li id={id} style={{ margin: "2rem 0", fontSize: "16px" }}>
          <p>{element.name}</p>
          <p>{element.age}</p>
        </li>
      ))}
    </>
  );
}
