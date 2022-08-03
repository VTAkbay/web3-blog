import axios from "axios";
import React from "react";
import { useAccount } from "wagmi";
import { alchemyHTTPS } from "../lib/utils";
import Loader from "../components/Loader";

function MyStories() {
  const { isConnected, isConnecting, isReconnecting } = useAccount();
  const { address } = useAccount();
  const [userStories, setUserStories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function getUserStories() {
    const baseURL = `${alchemyHTTPS}/getNFTs/`;

    const res = await axios({
      method: "get",
      url: `${baseURL}?owner=${address}`,
    });

    console.log(res.data.ownedNfts);

    if (res.data) {
      setUserStories(
        res.data.ownedNfts.filter((nft: any) => nft.description !== "")
      );
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (address) {
      getUserStories();
    }
    // eslint-disable-next-line
  }, [address]);

  console.log(address, isConnecting, isConnecting, loading);

  return (
    <>
      {isConnecting && isConnecting && loading && <Loader />}

      {!isConnecting && !isReconnecting && !isConnected && (
        <div>Please connect wallet.</div>
      )}

      {!isConnecting && !isReconnecting && isConnected && !loading && (
        <div>
          {userStories.map((story: any) => {
            console.log(story);

            return (
              <div key={story.id.tokenId}>
                {story.description}
                <img src={story.metadata.image} height="100px" alt="" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MyStories;
