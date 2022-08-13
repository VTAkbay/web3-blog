import React from "react";
import { useAccount } from "wagmi";
import { contractAdress, mockImg } from "../lib/utils";
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
    try {
      alchemy.nft
        .getNftMetadata(contractAdress, storyId!)
        .then(async (story) => {
          await axios.get(story.rawMetadata?.externalUrl).then(async (res) => {
            setStoryData([
              {
                id: story.tokenId,
                title: story.description,
                image: await mockImg(),
                text: res.data.text,
              },
            ]);

            setLoading(false);
          });
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function getUserStories() {
    alchemy.nft
      .getNftsForOwner(address!, {
        contractAddresses: [contractAdress],
      })
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
                    image: await mockImg(),
                    title: nft.title,
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
              index === self.findIndex((s) => s.tokenId === story.tokenId)
          )
          .map((story) => {
            return {
              id: story.tokenId,
              image: story.rawMetadata?.image,
              title: story.rawMetadata?.description,
              url: story.tokenUri!.raw,
            };
          });
        (async () => {
          const resolvedUserNfts = await Promise.all(
            rawUserStories.map(async (nft) => {
              try {
                const postAllData = await axios.get(nft.url);
                if (postAllData.data.externalUrl) {
                  const postDataResponse = await axios.get(
                    postAllData.data.externalUrl
                  );

                  return {
                    id: nft.id,
                    image: await mockImg(),
                    title: postDataResponse.data.title,
                    text: postDataResponse.data.text,
                  };
                }

                return {
                  id: nft.id,
                  image: await mockImg(),
                  title: postAllData.data.title,
                  text: postAllData.data.text,
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
    // Twice runs in Dev mode cause of StrictMode & Not on Prod
    if (!isReconnecting && !isConnecting) {
      if (address) {
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
            {storyData.length === 0 ? (
              <Link to={"/create-story"}>
                <Typography
                  gutterBottom
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                >
                  This place seems empty. <br />
                  Click me to share something.
                </Typography>
              </Link>
            ) : (
              storyData.map((story: any) => {
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
                        image={
                          story.image
                            ? story.image
                            : "https://picsum.photos/1920/1080"
                        }
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
                      <ShareButton storyId={story.id} />
                    </CardActions>
                  </Card>
                );
              })
            )}
          </Stack>
        </Container>
      )}
    </>
  );
}

export default StoryComponent;
