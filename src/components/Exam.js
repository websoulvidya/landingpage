import React,{useState} from 'react'
import "../../src/style.css"
function Exam() {
    let activeClass = useState("");
    let activeClass1 = useState("");
    let activeClass2 = useState("");


    let [classState, setClassState] = activeClass;
    let [classState1, setClassState1] = activeClass1;
    let [classState2, setClassState2] = activeClass2;
    //red
    function colorChange() {
      setClassState((prevClass) => {
          if (prevClass == "") {
              return "changebgred"
          }
          else {
              return "";
          }
      })
    }


//green
    function colorChange2() {
        setClassState1((prevClass) => {
            if (prevClass == "") {
                return "changebggreen"
            }
            else {
                return "";
            }
        })
      }

    //black
    function colorChange3() {
        setClassState2((prevClass) => {
            if (prevClass == "") {
                return "changebgblack"
            }
            else {
                return "";
            }
        })
      }
    return (
      <div className="App">
  <ul>
    <li className={`${classState}`}><button onClick={colorChange}>red</button></li>
    <li className={`${classState1}`}><button onClick={colorChange2}>green</button></li>
    <li className={`${classState2}`}><button onClick={colorChange3}>black</button></li>
    </ul>
      </div>)
}
export default Exam