let img = document.querySelector('img'),
    result = document.getElementById('result'),
    probability = document.getElementById('probability');

// when loading from another server
img.crossOrigin = 'Anonymous';

console.log(ml5);

// Create the classifier with MobileNet
const classifier = ml5.imageClassifier('MobileNet', () => {
    console.log('MobileNet ready');
});

console.log(classifier);

classifier.predict(img, (err, results) => {
    console.log(results);
    result.innerHTML = results[0].label;
    probability.innerHTML = (results[0].confidence.toFixed(2) * 100) + '%';
});



