import data from "../emojiList.json";

const Line = ({ search }) => {
   return data.map((elem, index) => {
      //   let found = elem.keywords.match(search);
      //   console.log("found: ", found);
      if (elem.keywords.match(search)) {
         return (
            <div
               className="line"
               onClick={() => {
                  navigator.clipboard.writeText(elem.symbol);
               }}
            >
               <div>{elem.symbol}</div>
               <div>{elem.title}</div>
               <div>Click to copy!</div>
            </div>
         );
      }
   });
};

// return <div>No emoji found 🙁</div>;

export default Line;
