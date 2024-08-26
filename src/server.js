const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const postRoutes = require('./database/routes/postRoutes');


app.get('/', (req, res) => {
    res.setEncoding('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb+srv://amadureira22:<db_password>@cluster1.pfwga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch (err => console.error('Counld not connect to Mongodb', err));

app.use('/api/posts', postRoutes);