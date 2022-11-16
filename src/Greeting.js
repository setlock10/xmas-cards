import { useState, useEffect, useRef } from "react";


function Greeting(){
    /* Global Variables */
    //let pressed = false
    let characterLeft= 0
    let characterTop = 0
    let moveTimer = 0
    //let hatCheck=null
    let hasHat = false
    
    const [pressed, setPressed] = useState(false);
    //const [hasHat, setHasHat] = useState(false);



    const refCharacter = useRef(null);
    const refHat = useRef(null);
    const refPenny = useRef(null);
    const refConnie = useRef(null);
    const refMessage = useRef(null);
    const hatCheck = useRef(0);
   // const moveTimer = useRef(0);

    useEffect(()=>{
        refCharacter.current.focus();
        refHat.current.focus();
        refConnie.current.focus();
        refPenny.current.focus();
        refMessage.current.focus();
       

        document.addEventListener("keydown",keydown)
        document.addEventListener("keyup",keyup)

        hatCheck.current = setInterval(checkHat, 10);
        refCharacter.current.classList.add("background-stand")
        refHat.current.classList.add("hidden")

        setTimeout(renderScene,1000)
        


    },[]);


    function renderScene(){
        refMessage.current.innerHTML="Use Arrow Keys <-  -> to Move <br /> and Spacebar to Jump"
        setTimeout(renderHat,3000)
    
    }

    function renderHat(){
        refMessage.current.innerHTML="<br /> Get In the Holiday Spirit"
        refHat.current.classList.remove("hidden")
    }

    function keydown(e){
        
        //pressed===true
        if(e.code==="ArrowRight")run(1)
        if(e.code==="ArrowLeft")run(-1)
        if(e.code==="Space")jump()
        
    }
    function keyup(e){
         //debugger
        if(e.code==="ArrowRight"){
            //clearInterval(moveTimer.current)
            clearInterval(moveTimer)
            moveTimer=0
      
             refCharacter.current.classList.remove("run");
             refConnie.current.classList.remove("run-cat");
             refPenny.current.classList.remove("run-cat");
             
    
            // character.classList.remove("background-run")
            //  character.classList.add("background-stand")
           
            // (hasHat)?(refCharacter.current.classList.remove("background-run-hat")):(refCharacter.current.classList.remove("background-run"));
            // (hasHat)?(refCharacter.current.classList.add("background-stand-hat")):(refCharacter.current.classList.add("background-stand"));
            // (hasHat)?(refConnie.current.classList.remove("connie-run-hat")):(refConnie.current.classList.remove("connie-run"));
            // (hasHat)?(refConnie.current.classList.add("connie-stand-hat")):(refConnie.current.classList.add("connie-stand"));
           // refConnie.current.classList.remove("connie-run-hat")
           // refPenny.current.classList.remove("penny-run-hat")
            //if(refCharacter.current.classList==="background-run-hat")
            

            if (hasHat){
                refPenny.current.classList.remove("penny-run-hat")
                refPenny.current.classList.add("penny-stand-hat")
                refCharacter.current.classList.remove("background-run-hat")
                refCharacter.current.classList.add("background-stand-hat")
                refConnie.current.classList.remove("connie-run-hat")
                refConnie.current.classList.add("connie-stand-hat")
                
            }
            else{
                refPenny.current.classList.remove("penny-run")
                refPenny.current.classList.add("penny-stand")
                refCharacter.current.classList.remove("background-run")
                refCharacter.current.classList.add("background-stand")
                refConnie.current.classList.remove("connie-run")
                refConnie.current.classList.add("connie-stand")
            }

            //(hasHat)?(refPenny.current.classList.remove("penny-run-hat")):(refPenny.current.classList.remove("penny-run"));
            //(hasHat)?(refPenny.current.classList.add("penny-stand-hat")):(refPenny.current.classList.add("penny-stand"));
            //console.log(refPenny.current)
             setPressed(false);
        }
    
        if(e.code==="ArrowLeft"){
            // clearInterval(moveTimer.current)
            clearInterval(moveTimer)
            moveTimer=0
      
            refCharacter.current.classList.remove("run");
            refConnie.current.classList.remove("run-cat");
            refPenny.current.classList.remove("run-cat");
            if (hasHat){
                refPenny.current.classList.remove("penny-run-hat")
                refPenny.current.classList.add("penny-stand-hat")
                refCharacter.current.classList.remove("background-run-hat")
                refCharacter.current.classList.add("background-stand-hat")
                refConnie.current.classList.remove("connie-run-hat")
                refConnie.current.classList.add("connie-stand-hat")
            }
            else{
                refPenny.current.classList.remove("penny-run")
                refPenny.current.classList.add("penny-stand")
                refCharacter.current.classList.remove("background-run")
                refCharacter.current.classList.add("background-stand")
                refConnie.current.classList.remove("connie-run")
                refConnie.current.classList.add("connie-stand")
            }
      
            // character.classList.remove("background-run")
            // character.classList.add("background-stand")
            setPressed(false);
        }
    }

    function run(direction){

        if(pressed===true){return;}
    
        /* Getting the current location of the character */
        characterLeft = parseInt(window.getComputedStyle(refCharacter.current).getPropertyValue("left"));
        //console.log(characterLeft)
       
        /* Setting the direction of the character */
        direction<0 ? (refCharacter.current.classList.add("flip")) : (refCharacter.current.classList.remove("flip"));
        direction<0 ? (refConnie.current.classList.add("flip")) : (refConnie.current.classList.remove("flip"));
        direction<0 ? (refPenny.current.classList.add("flip")) : (refPenny.current.classList.remove("flip"));
      
        (hasHat)?(refCharacter.current.classList.remove("background-stand-hat")):(refCharacter.current.classList.remove("background-stand"));
        (hasHat)?(refCharacter.current.classList.add("background-run-hat")):(refCharacter.current.classList.add("background-run"));
        (hasHat)?(refConnie.current.classList.remove("connie-stand-hat")):(refConnie.current.classList.remove("connie-stand"));
        (hasHat)?(refConnie.current.classList.add("connie-run-hat")):(refConnie.current.classList.add("connie-run"));
        (hasHat)?(refPenny.current.classList.remove("penny-stand-hat")):(refPenny.current.classList.remove("penny-stand"));
        (hasHat)?(refPenny.current.classList.add("penny-run-hat")):(refPenny.current.classList.add("penny-run"));
    
        
        //character.classList.remove("background-stand");
        //character.classList.add("background-run");
        refCharacter.current.classList.add("run");
        refPenny.current.classList.add("run-cat")
        refConnie.current.classList.add("run-cat")
        setPressed(true)
        //console.log(moveTimer)
        move(direction)
        if (moveTimer===0)
            moveTimer=setInterval(move,10,direction)
        //console.log(moveTimer)
    }
 
    function jump(){
        if((refCharacter.current.classList === "animate-jump")||(refCharacter.current.classList === "animate-jump-hat")){return};
    
        //console.log(character);
        //console.log(hasHat);
     
        (hasHat)?(refCharacter.current.classList.add("animate-jump-hat")):(refCharacter.current.classList.add("animate-jump"));

       
    
        if(hasHat){
            refCharacter.current.classList.remove("background-stand-hat")
            refCharacter.current.classList.add("background-run-hat")
        }
        else{
            refCharacter.current.classList.remove("background-stand")
            refCharacter.current.classList.add("background-run")
        }
     
    
    
        setTimeout(removeJump,300) //300ms = length of animation
    }

    function removeJump(){
        // (hasHat)?(character.classList.remove("animate-jump-hat")):(character.classList.remove("animate-jump"));
         refCharacter.current.classList.remove("animate-jump");
         refCharacter.current.classList.remove("animate-jump-hat")
        // refCharacter.current.classList.remove("background-run")
        // if(hasHat){
        //     refCharacter.current.classList.remove("background-run-hat")
        //     refCharacter.current.classList.add("background-stand-hat")
        // }
        // else{
        //     refCharacter.current.classList.remove("background-run")
        //     refCharacter.current.classList.add("background-stand")
        // }
     
     
     }

     function move(direction){
        direction<0 ? (characterLeft-=2) : (characterLeft+=2)
        //if(pressed===true){return;}
    
        /* Defining our movement boundaries */
        if (characterLeft>=1100){characterLeft=1100} 
        if (characterLeft<0){characterLeft=0} 
    
        refCharacter.current.style.left=characterLeft+'px';
        refPenny.current.style.left=characterLeft+((-145)*direction)+'px';
        refConnie.current.style.left=characterLeft+((-60)*direction)+'px';
    }

    function checkHat(){

        characterLeft = parseInt(window.getComputedStyle(refCharacter.current).getPropertyValue("left"));
        characterTop = parseInt(window.getComputedStyle(refCharacter.current).getPropertyValue("top"));
        //console.log(characterTop)
    
        if((characterTop<250)&&((characterLeft>330)&&(characterLeft<470))){
            //console.log("true");
            //setHasHat(true);

            hasHat=true;
            var list = refCharacter.current.classList


            console.log(list)
            if(refCharacter.current.classList[1]!=='run'){
            //if((refCharacter.current.classList[1]!=='run')||(refCharacter.current.classList[2]!=='run')){
                refCharacter.current.classList.add("background-stand-hat")
                refConnie.current.classList.remove("connie-stand")
                refPenny.current.classList.remove("penny-stand")
                refConnie.current.classList.add("connie-stand-hat")
                refPenny.current.classList.add("penny-stand-hat")
            }

            // refCharacter.current.classList.remove("background-stand");
            // refCharacter.current.classList.add("background-run-hat");
            // refConnie.current.classList.add("connie-run-hat");
            // refPenny.current.classList.add("penny-run-hat");
    
            clearInterval(hatCheck.current);
            refHat.current.classList.add("hidden")
            //debugger
    
    
    
        }   
    
    }
    
    
     


// onKeyDown={(e)=>keydown(e)}

    return (
        <div  id="greeting">
            <div id="game">
                <h1 ref={refMessage} id="message"> </h1>
                <div ref={refHat} id="hat"></div>
                <div  ref={refCharacter}  id="character" ></div>
                <div ref={refConnie} id="connie" className="connie-stand"></div>
                <div ref={refPenny} id="penny" className="penny-stand"></div>
            </div>
        </div>


    )


}

export default Greeting;
