function setup() {
    canvas=createCanvas(340, 340);
    canvas.position(535, 200);
    background("white");
    canvas.mouseReleased(classify_canvas);
    synth = window.speechSynthesis;
 }
 function clearCanvas() {
     background("white");
     console.log("Canvas Cleared!");
 }
 function preload() {
     classifier = ml5.imageClassifier('DoodleNet');
   }
   function draw (){
     strokeWeight (13);
     stroke(0);
     if(mouseIsPressed){
         line(pmouseX, pmouseY, mouseX, mouseY);
     }
 
 } 
 function classify_canvas () {
     classifier.classify(canvas, gotResult);
 }
 function gotResult (error, result) {
     if(error) {
         console.error(error);
     }
     else {
         console.log(result);
         document.getElementById("label").innerHTML = " Label= "+result[0].label;
         document.getElementById("confidence").innerHTML = " Confidence= "+Math.floor(result[0].confidence*100)+"%";
 
         utterthis=new SpeechSynthesisUtterance(result[0].label);
         synth.speak(utterthis);
     }
 }