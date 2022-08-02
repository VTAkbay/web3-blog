import { Box, Button, Container, TextField, Typography } from "@mui/material";
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

type UserSubmitForm = {
  title: string;
  text: string;
};

function PublishStoryForm() {
  const { address } = useAccount();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("*required"),
    text: Yup.string().required("*required"),
  });

  const { writeAsync } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: contractAdress,
    contractInterface: contractInterface,
    functionName: "safeMint",
    overrides: {
      value: ethers.utils.parseEther("0.01"),
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
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
        autoComplete="off"
        noValidate
        maxWidth="md"
      >
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            mb: 2,
            minWidth: "100%",
          }}
        >
          <TextField
            label="Title"
            maxRows={1}
            sx={{
              alignSelf: "center",
              width: "70%",
              color: "#374151",
              lineHeight: "1.25",
              borderRadius: "0.25rem",
              borderWidth: "1px",
              appearance: "none",
            }}
            variant="standard"
            {...register("title")}
          />
          <Typography
            sx={{
              color: "#EF4444",
              fontSize: "0.75rem",
              lineHeight: "0.25rem",
              marginLeft: "15%",
              marginTop: "1rem",
              width: "100%",
              height: "10px",
            }}
          >
            {errors.title?.message}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            minWidth: "100%",
          }}
        >
          <TextField
            label="Tell your story..."
            multiline
            rows={10}
            sx={{
              alignSelf: "center",
              width: "90%",
              color: "#374151",
              lineHeight: "1.25",
              borderRadius: "0.25rem",
              borderWidth: "1px",
              appearance: "none",
            }}
            variant="standard"
            {...register("text")}
          />
          <Typography
            sx={{
              color: "#EF4444",
              fontSize: "0.75rem",
              lineHeight: "0.25rem",
              marginLeft: "5%",
              marginTop: "1rem",
              width: "100%",
              height: "10px",
            }}
          >
            {errors.text?.message}
          </Typography>
        </Box>

        <Button type="submit" sx={{ mt: 3, width: "15ch" }} variant="outlined">
          Publish
        </Button>
      </Container>
    </Box>
  );
}

export default PublishStoryForm;
