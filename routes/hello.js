const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText);
});

router.get('/err', async (req, res, next) => {
    try {
        await err();
    } catch (e) {
        next(e);
    }
});

function err() {
    return Promise.reject(Error('Rejected'));
}

router.post('/', (req, res) => {
    res.send('Got a POST request');
});

module.exports = router;