const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const huhh = document.querySelector("#huh");
// const opcode= document.querySelector("#third");
function toggleImageTransition() {
    var image = document.getElementById('huh');
    var audio = document.getElementById('audio')
    image.classList.toggle('scale-0');
    audio.play();
    
}


function sum(opcode){
    if(opcode=="sum"){
        let value1=parseInt(first.value);
        let value2=parseInt(second.value);
        
        
    
        let suma= value1+value2;
        third.value=suma;
    }
    else if(opcode=="mul"){
        let value1=parseInt(first.value);
        let value2=parseInt(second.value);    
    
        let suma= value1*value2;
        third.value=suma;
    }
    else if(opcode=="sub"){
        let value1=parseInt(first.value);
        let value2=parseInt(second.value);
    
        let suma= value1-value2;
        third.value=suma;
    }
    else{
        let value1=parseInt(first.value);
        let value2=parseInt(second.value);  
        if( value2 ==0){
            toggleImageTransition();
        }
        else{
            let suma= value1/value2;
            third.value=suma;
        }
    
       
    }
    
};