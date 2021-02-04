import data from "../emojiList.json";

const Line = ({ search }) => {
   const results = [];
   for (let i = 0; i < data.length; i++) {
      if (data[i].keywords.match(search)) {
         results.push(data[i]);
      }
   }

   if (results.length === 0) {
      return <div className="nothing">No emoji found 🙁</div>;
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
