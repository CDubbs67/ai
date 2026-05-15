const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'answers.json');

app.use(cors());
app.use(express.json());
app.use(express.static('./')); // Serve your HTML/JS files

// Load answers
app.get('/api/answers', (req, res) => {
    if (!fs.existsSync(DATA_FILE)) {
        return res.json([]);
    }
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));
});

// Save answers
app.post('/api/answers', (req, res) => {
    const answers = req.body;
    fs.writeFileSync(DATA_FILE, JSON.stringify(answers, null, 2));
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
