const express = require("express");
const app = express();

const PORT = process.env.PORT || 8877;

app.get("/series", (req, res) => {
  res.json({
    exemplo: "exemplo",
  });
}),
  app.get("/about", (req, res) => {
    res.json({
      name: "Gabriela Clemente",
      email: "gabeclementej@gmail.com",
      urls: [
        {
          type: "github",
          url: "https://github.com/gabrielajc",
        },
        {
          type: "linkedin",
          url: "https://www.linkedin.com/in/gabeclemente",
        },
      ],
    });
  }),
  app.get("/", (req, res) => {
    res.json({
      msg: "Working",
    });
  }),
  app.listen(PORT, () => {
    console.log("escutando na porta" + PORT);
  });
