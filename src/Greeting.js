import { useState, useEffect } from "react";

function Greeting(){


   // document.addEventListener('DOMContentLoaded', onPageLoad);


    // var character = ()=>{
    //     return(
    //         <div   id="character" className="background-stand"></div>
    //     )

    // }



    //console.log (character)

    
    


    // function onPageLoad(){
      var character = document.getElementById("character");

    // console.log("g")
    // // var hatIcon = document.getElementById("hat");
    // }

 //   var character = document.getElementById("character");
//   //  var hatIcon = document.getElementById("hat");
 //   character.classList.add("background-stand");

    //State
    // const [meLeft, setMeLeft] = useState(0);
    // const [pressed, setPressed] = useState(false);
    /* Event Listeners */

    const [char, setChar] = useState(null);

    document.addEventListener("keydown",keyDown);

    function makeMe(){
        setChar(document.getElementById("character"))
        console.log(char)
    }


    /* Global Variables */
    // let pressed = false;
    // let characterLeft= 0;
    // let characterTop = 0;
    // let moveTimer = 0;
    // let hasHat = false;
    function keyDown(e){
        console.log(e)
    }

 





    return (
        <div id="greeting">
            <div id="game">
                <div id="hat"></div>
                <div   id="character" className="background-stand"></div>
                {/* {character} */}
            </div>
        </div>


    )


}

export default Greeting;
