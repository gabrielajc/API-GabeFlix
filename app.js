const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.listen(PORT, () => {
 console.log('escutando na porta' + PORT)
})