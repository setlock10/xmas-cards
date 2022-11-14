import { useState, useEffect, useRef } from "react";


function Greeting(){
    /* Global Variables */
    //let pressed = false
    let characterLeft= 0
    let characterTop = 0
    let moveTimer = 0
    let hasHat = false
    
    const [pressed, setPressed] = useState(false);



    const refCharacter = useRef(null);
    const refHat = useRef(null);
    const refPenny = useRef(null);
    const refConnie = useRef(null);

    useEffect(()=>{
        refCharacter.current.focus();
        refHat.current.focus();
        refConnie.current.focus();
        refPenny.current.focus();
       

        document.addEventListener("keydown",keydown)
        document.addEventListener("keyup",keyup)

    },[]);


    function keydown(e){
        // console.log("hey")
       
        // refCharacter.current.classList.add("background-stand-hat");
        // refCharacter.current.style.left=600+'px';

        //pressed===true
       // if(e.code==="ArrowRight")run(1)
       // if(e.code==="ArrowLeft")run(-1)
        if(e.code==="Space")jump()
        
    }
    function keyup(e){

    }
 
    function jump(){
        if((refCharacter.current.classList === "animate-jump")||(refCharacter.current.classList === "animate-jump-hat")){return};
    
        //console.log(character);
        //console.log(hasHat);
     
        (hasHat)?(refCharacter.current.classList.add("animate-jump-hat")):(refCharacter.current.classList.add("animate-jump"));
    
        if(hasHat){
            refCharacter.current.classList.add("animate-jump-hat")
        }
        else{
        //    character.classList.add("background-run");
        }
     
    
    
        setTimeout(removeJump,300) //300ms = length of animation
    }

    function removeJump(){
        // (hasHat)?(character.classList.remove("animate-jump-hat")):(character.classList.remove("animate-jump"));
         refCharacter.current.classList.remove("animate-jump");
         refCharacter.current.classList.remove("animate-jump-hat")
     
     }

     function move(direction){
        direction<0 ? (characterLeft-=2) : (characterLeft+=2)
    
        /* Defining our movement boundaries */
        if (characterLeft>=800){characterLeft=800} 
        if (characterLeft<0){characterLeft=0} 
    
        refCharacter.currentstyle.left=characterLeft+'px';
        refPenny.currentstyle.left=characterLeft+((-145)*direction)+'px';
        refConnie.current.left=characterLeft+((-60)*direction)+'px';
    }
    
     


// onKeyDown={(e)=>keydown(e)}

    return (
        <div  id="greeting">
            <div id="game">
                <div ref={refHat} id="hat"></div>
                <div  ref={refCharacter}  id="character" className="background-stand"></div>
                <div ref={refConnie} id="connie" className="connie-stand"></div>
                <div ref={refPenny} id="penny" className="penny-stand"></div>
            </div>
        </div>


    )


}

export default Greeting;
