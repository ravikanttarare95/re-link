import photokit from "./../configs/photokit.js";

const getImageKitAuth = (req, res) => {
  const imagekitAuthParams = photokit.getAuthenticationParameters();

  if (imagekitAuthParams) {
    res.status(200).json(imagekitAuthParams);
  }
};

export default getImageKitAuth;
