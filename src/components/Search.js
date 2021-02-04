import { useState } from "react";
import Line from "./Line";

const Search = () => {
   const [search, setSearch] = useState("");

   return (
      <>
         <h1>😎 Emoji Search 😎</h1>
         <form>
            <input
               type="search"
               name="search"
               placeholder="Which Emoji are you looking for?"
               value={search}
               onChange={(event) => {
                  setSearch(event.target.value);
               }}
            />
            <Line search={search} />
         </form>
      </>
   );
};

export default Search;
