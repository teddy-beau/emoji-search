import { useState } from "react";
import Line from "./Line";
import data from "../emojiList.json";

const Search = () => {
   const [search, setSearch] = useState("");

   const results = [];
   for (let i = 0; i < data.length; i++) {
      // if (data[i].keywords.indexOf(search) !== -1) { // Alternative
      if (data[i].keywords.match(search)) {
         results.push(data[i]);
      }
   }

   return (
      <>
         <h1>😎 Emoji Search 😎</h1>
         <input
            type="search"
            name="search"
            placeholder="Which Emoji are you looking for?"
            value={search}
            onChange={(event) => {
               setSearch(event.target.value);
            }}
         />
         <Line results={results} />
      </>
   );
};

export default Search;
