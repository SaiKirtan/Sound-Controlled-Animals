function startClassification() {

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lyLTpvnKq/model.json', modelReady ); 
}
function modelReady() {
    classifier.classify(gotResults);
    console.log("Model is Ready");
}
function gotResults(error, results) {
/*    if (error) {
        console.log(error);
    }
    else{
        console.log(results);




        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;




        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";




        img = document.getElementById("cat");
        img2 = document.getElementById("dog");
        img3 = document.getElementById("bird");
        img4 = document.getElementById("cow");


        if (results[0].label == "Meowing"){

            img.src = img;
            
        }
        else if (results[0].label == "Barking"){

            
            img2.src = img2;
            
        }
        else if (results[0].label == "Chirping"){

            
            img3.src = img3;
            
        }
        else{

            
            img4.src = img4;
        }
    }
*/
}