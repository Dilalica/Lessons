let img = document.querySelector('img'),
    result = document.getElementById('result'),
    probability = document.getElementById('probability');

// when loading from another server
img.crossOrigin = 'Anonymous';

// Create the classifier with MobileNet
const classifier = ml5.imageClassifier('MobileNet', () => console.log('MobileNet ready'));

classifier.predict(img, (err, results) => {
    console.log(results);
    result.innerText = results[0].label;
    probability.innerText = (results[0].confidence.toFixed(2) * 100) + '%';
});



