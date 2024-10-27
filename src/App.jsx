import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [ballnumber,setBallNumber] = useState(0)
  // const[scoreCard,setScoreCard] = useState({})
  const[inputShows,setInputShows] = useState(false)
  const[runs,setRuns] = useState(0)
  const[ball,setBall] = useState(0)
  const[overArray,setOverArray] = useState([{}])
  const[final,setFinal] = useState(false)
  const[totalScore,setTotalScore] = useState(0)

  const clickHandle = () =>{
    inputShows ? setInputShows(false) : setInputShows(true)
  }

  useEffect(()=>{
    if(overArray.length === 7){
      console.log("overEnd")
      setFinal(true)
      console.log(totalScore)
    }
  },[overArray,final,totalScore])

  const addRespective = () =>{
    const newArray = [...overArray,{ballNo:ball,runs:runs,id: uuidv4()}]
    const currentScore = totalScore + parseInt(runs)
    setTotalScore(currentScore)
    setOverArray(newArray)
    setBall(0)
    setRuns(0)
    setInputShows(false)
    
  }
  
  

  return (
    <div className="flex w-full items-center flex-col p-5">
      <div className="border-b-4 border-red-500 w-full text-center p-5">
        <h1 className="font-bold text-3xl">Gully Cricket</h1>
      </div>
      <div className="m-5 flex flex-col justify-center gap-3">
        <div>
          <div className="flex w-80 justify-between">
            <h1 className="font-semibold">Ball Number</h1>
            <h1 className="font-semibold">Runs on the Ball</h1>
          </div>
          {overArray.map((e)=>(
            <div key={e.id} className="flex w-80 justify-between">
              <h1 className="font-semibold">{e.ballNo}</h1>
              <h1 className="font-semibold">{e.runs}</h1>
          </div>
          ))}
        </div>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md" onClick={clickHandle}>Add Ball Number and Respective Runs</button>
        {inputShows && 
          <div className="flex gap-3 w-full">
            <div className="flex flex-col w-full">
              <label>Ball Number</label>
              <input value={ball} onChange={(e)=>(setBall(e.target.value))} className="border-2 border-gray-700 rounded-md p-2 w-6/12" placeholder="Ball Number"/>
            </div>
            <div className="flex flex-col w-full">
              <label>Runs on this Ball</label>
              <input value={runs} onChange={(e)=>(setRuns(e.target.value))} className="w-6/12 border-2 border-gray-700 rounded-md p-2" placeholder="Runs"/>
            </div>
            <button onClick={addRespective} className="bg-green-500 text-white px-3 py-1 rounded-md self-end">Add</button>
          </div>
          }
      </div>
      {final && <div>Total Runs Score in this Over is {totalScore}</div> }
    </div>
  )
}

export default App
