import axios from "axios";

const key = process.env.REACT_APP_PINATA_KEY as string;
const secret = process.env.REACT_APP_PINATA_SECRET as string;

if (!key || !secret) {
  throw Error("Missing Pinata key and secret!");
}

export const pinJSONToIPFS = async (JSONBody: object) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
        pinataUrl: undefined,
      };
    });
};
