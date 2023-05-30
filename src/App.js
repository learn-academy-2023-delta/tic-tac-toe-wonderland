import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import YourTurn from './components/YourTurn'
const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

const handleGamePlay = (index) => {
let updatedBoard = [...squares]
updatedBoard [index] = "❌"
setSquares(updatedBoard)
}


//Create a function that displays an "O"

const handleGamePlay2 = (index) => {
  let updatedBoard = [...squares]
  updatedBoard [index] = "⭕️"
  setSquares(updatedBoard)
 
// create a button that'll allow the user to keep switching positons until they've pushed the button

//the first click in the box will be a 'X' and on the second click will be 'O' 

//

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameboard'>
        {squares.map((value, index) => {
          return (
            <Square
              key = {index}
              value = {value}
              index = {index}
              handleGamePlay = {handleGamePlay}
             />
              
          )
        })}
           </div>
      
    </>
      )
}

return (
  <>
    <h1>Tic Tac Toe</h1>
    <div className='gameboard'>
      {squares.map((value, index) => {
        return (
          <Square
            key = {index}
            value = {value}
            index = {index}
            handleGamePlay2 = {handleGamePlay2}
           />
            
        )
      })}
         </div>
    
  </>
    )
}

export default App   
 

     
 