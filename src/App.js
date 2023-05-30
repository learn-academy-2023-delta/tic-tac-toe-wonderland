import React, { useState, useEffect } from 'react'
import cell from './components/cell'
import './App.css'

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", "",])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)
  
  const message = "It is now " + go + " 's go."

  const checkscore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")
        if(circleWins) {
        setWinningMessage("Circle Wins!")
          return
        }
    } )
  
  }
  
  useEffect(() => {
    checkscore ()
  }, [cells])

return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="app">
        <div className="gameboard">
        {cells.map((cell, index) => {
          return (
            <Cell
              key = {index}
              id = {index}
              cell = {cell}
              cells = {cells}
              setCells = {setCells}
              go = {go}
              setGo = {setGo}
             />
              
          )
        })}
        </div>
        
           </div>
           <p>{winningMessage || message}</p>
      
    </>
      )
}

export default App   
 

     
 