const Line = ({ results }) => {
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
