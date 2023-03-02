const imageConverterController = require("../controllers/imageConverter");

module.exports = function (app) {
  app.post("/api/v1/image-converter", imageConverterController.convertImage);
  app.get("/", async (req, res) => {
    res.send({ message: "Hello world" });
  });
};
