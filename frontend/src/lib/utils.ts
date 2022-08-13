import ABI from "../blog-abi.json";
import axios from "axios";

export const alchemyHTTPS = process.env.REACT_APP_ALCHEMY_HTTPS;

export const defaultNftMetadataImage =
  "https://gateway.pinata.cloud/ipfs/Qma7S2YRWJFTLSxRKB6E4qpcFjFANz5iYzfmXreDXCJKji";

export const contractInterface = ABI;

export const contractAdress = "0x85eE0Db07D8774b59637a52ea85200df82638F7A";

export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export async function mockImg() {
  return await axios.get("https://picsum.photos/1920/1080").then((res) => {
    return res.request.responseURL;
  });
}
