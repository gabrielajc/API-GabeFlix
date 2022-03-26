const express = require("express");
const app = express();
const uploadUser = require("./middlewares/uploadimage");
const path = require("path");

const PORT = process.env.PORT || 8877;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join("./public/uploads/series")));
app.listen(PORT, () => {
  console.log("escutando na porta" + PORT);
});

app.post("/upload-image", uploadUser.single("image"), async (req, res) => {
  if (req.file) {
    console.log(req.file);
    return res.json({
      url: `localhost:8877/uploads/${req.file.filename}`,
      error: false,
      msg: "Upload image works",
    });
  }

  return res.status(400).json({
    error: true,
    msg: "Erro: upload image request don't works, necessary to send an image in png, jpeg or jpg format",
  });
});

app.get("/about", (req, res) => {
  res.json({
    name: "Gabriela Clemente",
    email: "gabeclementej@gmail.com",
    urls: [
      {
        type: "github",
        urlink: "https://github.com/gabrielajc",
      },
      {
        type: "linkedin",
        urlink: "https://www.linkedin.com/in/gabeclemente",
      },
    ],
  });
}),
  app.get("/", (req, res) => {
    res.json({
      msg: "Working",
    });
  });
