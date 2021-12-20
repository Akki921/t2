import react,{useEffect,useState} from 'react'
function App() {
const [finalbillwithtip, setfinalbillwithtip] = useState([])
let final=[]
  let tip=[];
  let bill=[]
  let bill1=124;
  let bill2=48;
  let bill3=268;
  //calcuate tip1
  const   tip1= Math.round((15/ bill1) * 100)
  const   tip2= Math.round((20/ bill2) * 100)
  const   tip3= Math.round((10/ bill3) * 100)
let TipBill=tip.concat(tip1,tip2,tip3);
let TotalBill=bill.concat(bill1,bill2,bill3)
  return (
    <div className="App">
      <h4>Containing all three tips for each bill:{TipBill.map((tip)=>{
        return(
          <>
         <li>
         {tip}
         </li>
          </>
        )
      })}</h4>
      <hr/>
      <h4>Containing all three tips for each bill:{TipBill.map((tip,bill)=>{
        return(
          <>
         <li>
         {tip +TotalBill[bill]}
         </li>
          </>
        )
      })}</h4>
    </div>
  );
}

export default App;
