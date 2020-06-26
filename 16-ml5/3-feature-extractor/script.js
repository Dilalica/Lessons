/*

addImage()
featureExtractor()
documented at
https://ml5js.org/docs/FeatureExtractor

*/

let classifier;
let label = document.createElement('p');
let count = {
    sad: 0,
    happy: 0
};

function setup() {
    noCanvas();
    let mobilenet = ml5.featureExtractor('MobileNet', function(){
        console.log('MobileNet ready');
    });
    let video = createCapture(VIDEO);
    classifier = mobilenet.classification(video, function(){
        console.log('video ready');
        document.body.appendChild(label);
    });
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        label.innerHTML = getMaxLabel(results);
        classifier.classify(gotResults);
    }
}

function add(label, element){
    count[label]++;
    element.innerHTML = label + ' ' + count[label];
    classifier.addImage(label);
    console.log(classifier);
}

function train(element){
    classifier.train(loss => {
        if (loss == null) {
            element.innerHTML = 'Trained'
            classifier.classify(gotResults);
        } else {
            element.innerHTML = 'Training: ' + loss;
        }
    });
}

function getMaxLabel(results){
    let maxConfidence = 0;
    let maxLabel = '';
    for(let i=0; i<results.length; i++){
        if(maxLabel < results[i].confidence){
            maxLabel = results[i].label;
        }
    }
    return maxLabel;
}
