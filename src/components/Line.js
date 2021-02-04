import data from "../emojiList.json";

const Line = ({ search }) => {
   const results = [];
   for (let i = 0; i < data.length; i++) {
      if (data[i].keywords.match(search)) {
         results.push(data[i]);
      }
   }
   //    console.log("results: ", results);

   if (results.length === 0) {
      return <div>No emoji found 🙁</div>;
   } else {
      return results.map((elem, index) => {
         return (
            <div
               key={index}
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
      });
   }
};

export default Line;
