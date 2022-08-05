import React from "react";
import { useAccount } from "wagmi";
import { alchemyHTTPS } from "../lib/utils";
import axios from "axios";
import {
  Button,
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

function Story() {
  const isMobile = useMediaQuery("(max-width:899px)");
  const { isConnected, isConnecting, isReconnecting, address } = useAccount();
  const [userStories, setUserStories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function getUserStories() {
    const baseURL = `${alchemyHTTPS}/getNFTs/`;

    const res = await axios({
      method: "get",
      url: `${baseURL}?owner=${address}`,
    });

    if (res.data.ownedNfts) {
      const rawUserStories = res.data.ownedNfts
        .filter((nft: any) => nft.description.length >= 25)
        .map((nft: any) => {
          return {
            id: nft.id.tokenId,
            time: nft.timeLastUpdated,
            image: nft.metadata.image,
            title: nft.metadata.description,
            url: nft.metadata.externalUrl,
          };
        });

      (async () => {
        const resolvedUserNfts = await Promise.all(
          rawUserStories.map(async (nft: any) => {
            try {
              const response = await axios.get(nft.url);

              return {
                id: nft.id,
                time: nft.time,
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
        setUserStories(resolvedUserNfts as any);
        setLoading(false);
      })();
    }
  }

  React.useEffect(() => {
    if (address) {
      getUserStories();
    }
    // eslint-disable-next-line
  }, [address]);

  return (
    <>
      {(!isConnecting && !isReconnecting && isConnected && !loading) || (
        <Loader />
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
            {userStories.map((story: any) => {
              const text = isMobile
                ? story.text.substring(0, 80) + "..."
                : story.text.substring(0, 350) + "...";

              return (
                <Card key={story.id} variant="outlined" sx={{ width: "50vw" }}>
                  <CardActionArea>
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
                        {text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
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

export default Story;
