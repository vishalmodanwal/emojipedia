import React from "react";
import Emoji from "./Emoji"
import emojipedia from "../emojipedia";
const Arr=emojipedia.map((word)=>{
  return word.meaning.substring(1,100);
});

function App() {
 return ( 
   <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
  {emojipedia.map(emoji=>(
  <Emoji 
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
    />))}
 </dl>
 </div>);
  }
export default App;
