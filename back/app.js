const express = require('express');
const app = express();
const sequelize = require('./database/init')

//sequelize.sync({force: true})

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Welcome to GymPartner API v1"});
});

app.use('/programs', require('./routes/programs'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});