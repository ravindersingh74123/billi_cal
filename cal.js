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
function displayPhoto() {
    const photoContainer = document.getElementById("huh");
    
    // Clear previous content
    photoContainer.innerHTML = '';

    // Display a photo
    const photo = document.createElement('img');
    photo.src = 'huh_cat.jpg'; // Replace with your photo URL
    photo.alt = 'Photo';
    photo.className = 'w-64 h-auto';
    photoContainer.appendChild(photo);
}

function displayVideo() {
    const videoContainer = document.getElementById("koyl");
    
    // Clear previous content
    // photoContainer.innerHTML = '';
    videoContainer.innerHTML = '';

    // Display a video
    const video = document.createElement('video');
    video.className = 'w-64 h-auto';
    video.controls = true;
    const source = document.createElement('source');
    source.src = 'koyl.mp4'; // Replace with your video URL
    source.type = 'video/mp4';
    video.appendChild(source);
    videoContainer.appendChild(video);
    video.play();
}

function sum(opcode){
    if(opcode=="sum"){
        let value1=parseInt(first.value);
        let value2=parseInt(second.value);
        
        
    
        let suma= value1+value2;
        if(suma ==7){
            displayVideo();
            third.value=suma;
        }
        else{
            third.value=suma;
        }
       
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
            // toggleImageTransition();
            displayPhoto();
            
        }
        else{
            let suma= value1/value2;
            third.value=suma;
        }
    
       
    }
    
};
