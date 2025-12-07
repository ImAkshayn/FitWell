const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb://localhost:27017/fitwell';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    activities: [{
        type: { type: String },
        distance: { type: Number },
        duration: { type: Number },
        calories: { type: Number },
        date: { type: Date, default: Date.now }
    }]
}));

app.post('/addActivity', async (req, res) => {
    const { username, type, distance, duration, calories } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            user.activities.push({ type, distance, duration, calories });
            await user.save();
            res.json(user);
        } else {
            user = new User({ username, activities: [{ type, distance, duration, calories }] });
            await user.save();
            res.json(user);
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.get('/getActivities/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (user) {
            res.json(user.activities);
        } else {
            res.status(404).json({ msg: 'User not found' });
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
