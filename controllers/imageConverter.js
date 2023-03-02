const sharp = require("sharp");

module.exports.convertImageBase64ToWebp = async ( req , res ) => {

  async function toWebp ( imageInBase64 ) {
    return new Promise(( resolve , reject ) => {
      sharp(Buffer.from(imageInBase64 , "base64"))
        .toFormat("webp")
        .toBuffer(( err , buffer ) => {
          if (err) {
            reject(err);
          } else {
            resolve(buffer.toString("base64"));
          }
        });
    });
  }

  try {
    const response = {
      imageBase64: await toWebp(req.body.imageBase64)
    };
    res.send(response);
  } catch (e) {
    console.log(e);
    res.send(req.body.imageBase64);
  }


};
