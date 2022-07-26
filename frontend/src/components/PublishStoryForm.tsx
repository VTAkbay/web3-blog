import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  LinearProgress,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { pinJSONToIPFS } from "../lib/pinata";
import { ethers } from "ethers";
import { useAccount, useContractWrite } from "wagmi";
import {
  contractAdress,
  contractInterface,
  defaultNftMetadataImage,
} from "../lib/utils";
import { LoadingButton } from "@mui/lab";
import PublishIcon from "@mui/icons-material/Publish";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

type UserSubmitForm = {
  title: string;
  text: string;
};

function PublishStoryForm() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [creating, setCreating] = React.useState(false);
  const [creatingError, setCreatingError] = React.useState(false);
  const [creatingErrorMessage, setCreatingErrorMessage] = React.useState("");
  const [confirming, setConfirming] = React.useState(false);

  const handleErrorBar = () => {
    setCreatingError(false);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("*required")
      .min(25, "Title must be at least 25 characters"),
    text: Yup.string()
      .required("*required")
      .min(250, "Story must be at least 250 characters"),
  });

  const { writeAsync } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: contractAdress,
    contractInterface: contractInterface,
    functionName: "createPost",
    overrides: {
      value: ethers.utils.parseEther("0.01"),
    },
    async onSettled(data, error) {
      if (data) {
        setConfirming(true);

        const transaction = await data?.wait();

        if (transaction.confirmations >= 1) {
          setConfirming(false);
          navigate(`/my-stories`);
        }
      }

      if (error?.name && error.message) {
        setCreatingError(true);
        setCreatingErrorMessage(error.message);
      }

      setCreating(false);
    },
  });

  const callContract = (uri: string) => {
    const args = [address, uri];

    writeAsync({
      recklesslySetUnpreparedArgs: args,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (formData: UserSubmitForm) => {
    setCreating(true);

    const pinataResponse = await pinJSONToIPFS(formData);
    const nftMetaData = {
      image: defaultNftMetadataImage,
      description: formData.title,
      externalUrl: pinataResponse.pinataUrl,
    };
    const nftResult = await pinJSONToIPFS(nftMetaData);

    if (nftResult.pinataUrl) {
      callContract(nftResult.pinataUrl);
    }
  };

  return (
    <Box component="div">
      <Box sx={{ width: "100%", height: "5px" }}>
        {creating && <LinearProgress color="inherit" />}
      </Box>

      <Container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        noValidate
        maxWidth="md"
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Stack
          direction="column"
          spacing={4}
          sx={{
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "70%",
            }}
          >
            <TextField
              label="Title"
              maxRows={1}
              sx={{
                width: "100%",
                color: "#374151",
                appearance: "none",
              }}
              variant="standard"
              {...register("title")}
            />
            <Typography
              sx={{
                color: "#EF4444",
                fontSize: "0.75rem",
                width: "100%",
                height: "10px",
                marginTop: "5px",
              }}
            >
              {errors.title?.message}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "90%",
            }}
          >
            <TextField
              label="Tell your story..."
              multiline
              rows={10}
              sx={{
                width: "100%",
                color: "#374151",
                appearance: "none",
              }}
              variant="standard"
              {...register("text")}
            />
            <Typography
              sx={{
                color: "#EF4444",
                fontSize: "0.75rem",
                width: "100%",
                height: "10px",
                marginTop: "5px",
              }}
            >
              {errors.text?.message}
            </Typography>
          </Box>

          <LoadingButton
            endIcon={<PublishIcon />}
            type="submit"
            variant="outlined"
            loadingPosition="end"
            loading={creating}
          >
            Publish
          </LoadingButton>

          <Snackbar
            open={creatingError}
            autoHideDuration={10000}
            onClose={handleErrorBar}
          >
            <Alert
              action={
                <>
                  <Button
                    onClick={handleErrorBar}
                    type="submit"
                    color="inherit"
                    size="small"
                  >
                    Retry
                  </Button>
                  <IconButton
                    sx={{ marginLeft: "1rem", padding: "4px" }}
                    aria-label="delete"
                    onClick={handleErrorBar}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              }
              severity="warning"
              sx={{ width: "100%" }}
            >
              {creatingErrorMessage}!
            </Alert>
          </Snackbar>

          <Snackbar open={confirming}>
            <Alert severity="success" sx={{ width: "100%" }}>
              Confirming the transaction, please wait!
            </Alert>
          </Snackbar>
        </Stack>
      </Container>
    </Box>
  );
}

export default PublishStoryForm;
