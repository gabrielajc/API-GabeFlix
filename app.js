const express = require("express");
const app = express();
const uploadUser = require('./middlewares/uploadimage')

const PORT = process.env.PORT || 8877;

app.post("/upload-image", uploadUser.single('image'), async (req, res) => {

  if(req.file){
    console.log(req.file)
    return res.json({
      error: false,
      msg:  "Upload image works"
    });
    
  }

  return res.status(400).json({
    error: true,
    msg: "Erro: upload image request don't works, necessary to send an image in png, jpeg or jpg format"
  });

});

app.get("/series", (req, res) => {
  res.json({
    exemplo: "exemplo",
  });
})

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
