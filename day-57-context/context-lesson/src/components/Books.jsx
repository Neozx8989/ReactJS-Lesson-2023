import React from "react";
import Book from "./Book";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function Books() {
    const list= useContext(BookContext);
  return (
    <ul>
        {list.map((item, index)=> {
           return <Book key={index} item={item}/>
        })}
    </ul>
    )
}
