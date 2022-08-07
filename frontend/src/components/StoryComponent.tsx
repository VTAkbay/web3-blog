import React from "react";
import { useAccount } from "wagmi";
import { contractAdress } from "../lib/utils";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Loader from "./Loader";
import ShareButton from "./ShareButton";
import { Alchemy, Network } from "alchemy-sdk";
import { Link } from "react-router-dom";

interface StoryComponentProps {
  storyId?: string;
  userStories?: boolean;
  latestStories?: boolean;
}

function StoryComponent({
  storyId,
  latestStories,
  userStories,
}: StoryComponentProps) {
  const isMobile = useMediaQuery("(max-width:899px)");
  const { isConnected, isConnecting, isReconnecting, address } = useAccount();
  const [storyData, setStoryData] = React.useState([] as any);
  const [loading, setLoading] = React.useState(true);

  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_KEY,
    network: Network.MATIC_MUMBAI,
  };
  const alchemy = new Alchemy(settings);

  async function getStory() {
    alchemy.nft.getNftMetadata(contractAdress, storyId!).then(async (story) => {
      try {
        await axios.get(story.rawMetadata?.externalUrl).then((res) => {
          setStoryData([
            {
              id: story.tokenId,
              title: story.description,
              image: story.rawMetadata?.image,
              text: res.data.text,
            },
          ]);

          setLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    });
  }

  async function getUserStories() {
    alchemy.nft
      .getNftsForOwner(address!, contractAdress as any)
      .then(async (res) => {
        try {
          const rawUserStories = res.ownedNfts
            .filter((story) => story.description.length >= 25)
            .map((story) => {
              return {
                id: story.tokenId,
                image: story.rawMetadata?.image,
                title: story.rawMetadata?.description,
                url: story.rawMetadata?.externalUrl,
              };
            });

          (async () => {
            const resolvedUserNfts = await Promise.all(
              rawUserStories.map(async (nft) => {
                try {
                  const response = await axios.get(nft.url);

                  return {
                    id: nft.id,
                    image: nft.image,
                    title: nft.title,
                    url: nft.url,
                    text: response.data.text,
                  };
                } catch (error) {
                  console.error(error);
                }
              })
            );
            setStoryData(resolvedUserNfts);
            setLoading(false);
          })();
        } catch (error) {
          console.error(error);
        }
      });
  }

  async function getLatestStories() {
    alchemy.nft.getNftsForContract(contractAdress).then(async (res) => {
      try {
        const rawUserStories = res.nfts
          .filter(
            (story, index, self) =>
              index ===
              self.findIndex(
                (s) =>
                  s.tokenId === story.tokenId && story.description.length >= 25
              )
          )
          .map((story) => {
            return {
              id: story.tokenId,
              image: story.rawMetadata?.image,
              title: story.rawMetadata?.description,
              url: story.rawMetadata?.externalUrl,
            };
          });
        (async () => {
          const resolvedUserNfts = await Promise.all(
            rawUserStories.map(async (nft) => {
              try {
                const response = await axios.get(nft.url);
                return {
                  id: nft.id,
                  image: nft.image,
                  title: nft.title,
                  url: nft.url,
                  text: response.data.text,
                };
              } catch (error) {
                console.error(error);
              }
            })
          );
          setStoryData(resolvedUserNfts);
          setLoading(false);
        })();
      } catch (error) {
        console.error(error);
      }
    });
  }

  React.useEffect(() => {
    if (address && !isReconnecting && !isConnecting) {
      if (storyId) {
        getStory();
      } else if (userStories) {
        getUserStories();
      } else if (latestStories) {
        getLatestStories();
      }
    } else {
      setLoading(false);
    }

    // eslint-disable-next-line
  }, [address, isConnecting, isReconnecting, storyId]);

  return (
    <>
      {(isConnecting || isConnecting || loading) && <Loader />}

      {!isConnecting && !isReconnecting && !isConnected && !loading && (
        <div>Please connect wallet.</div>
      )}

      {!isConnecting && !isReconnecting && isConnected && !loading && (
        <Container
          maxWidth="md"
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="column"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
          >
            {storyData.map((story: any) => {
              const text = isMobile
                ? story.text.substring(0, 80) + "..."
                : story.text.substring(0, 350) + "...";

              return (
                <Card
                  key={story.id}
                  variant="outlined"
                  sx={{ width: isMobile ? "70vw" : "50vw" }}
                >
                  <CardActionArea component={Link} to={`/story/${story.id}`}>
                    <CardMedia
                      component="img"
                      height={isMobile ? "80" : "150"}
                      image={"https://picsum.photos/1920/1080"}
                      alt="story image"
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant={isMobile ? "h6" : "h5"}
                        component="div"
                      >
                        {story.title}
                      </Typography>
                      <Typography
                        variant={isMobile ? "body2" : "body1"}
                        color="text.secondary"
                      >
                        {storyId ? story.text : text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <ShareButton />
                  </CardActions>
                </Card>
              );
            })}
          </Stack>
        </Container>
      )}
    </>
  );
}

export default StoryComponent;
