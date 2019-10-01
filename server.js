const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'Kim',
            'birthday': '930216',
            'gender': 'male',
            'job': 'Student'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'Kang',
            'birthday': '830616',
            'gender': 'female',
            'job': 'Front-End Developer'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'Han',
            'birthday': '980616',
            'gender': 'male',
            'job': 'Teacher'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));