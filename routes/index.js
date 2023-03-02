const imageConverterController = require("../controllers/imageConverter");

module.exports = function (app) {
  app.post("/api/v1/image-converter-base64-webp", imageConverterController.convertImageBase64ToWebp);
  app.get("/", async (req, res) => {
    res.send({ message: "Hello world" });
  });
};
