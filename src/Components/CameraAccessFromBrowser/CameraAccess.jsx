const CameraAccess = () => {
    var onFailSoHard = function(e) {
        console.log('Reeeejected!', e);
      };
    
      navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(localMediaStream);
    
        video.onloadedmetadata = function(e) {
            console.log(e);
        };
      }, onFailSoHard);
    return ( 
        <video autoplay></video>
     );
}
 
export default CameraAccess;