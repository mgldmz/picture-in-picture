const videoElement = document.getElementById('video');
const button = document.getElementById('button');

/* Prompt to select media stream */

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        /* Catch error */
        console.log(error);
    }
}

/* Events */

button.addEventListener('click', async () => {
    /* Disable button */
    button.disabled = true;
    //Start picture and picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;

})

/* On Load */

selectMediaStream();