const tf = require('@tensorflow/tfjs-node');

const MODEL_URL = 'https://storage.googleapis.com/modelbatik/model-in-prod/model.json';

async function loadModel() {
    console.log('Mencoba memuat model dari:', MODEL_URL);
    return tf.loadGraphModel(MODEL_URL);
}

module.exports = loadModel;