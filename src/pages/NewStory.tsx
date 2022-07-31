import { Box, Button, Container, TextField } from "@mui/material";

function NewStory() {
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
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "3rem",
        }}
        autoComplete="off"
        noValidate
        maxWidth="md"
      >
        <TextField
          label="Title"
          maxRows={1}
          sx={{ mb: 2, width: "70%" }}
          variant="standard"
        />

        <TextField
          label="Tell your story..."
          multiline
          rows={10}
          sx={{ width: "90%" }}
          variant="standard"
        />

        <Button sx={{ mt: 3, width: "15ch" }} variant="outlined">
          Publish
        </Button>
      </Container>
    </Box>
  );
}

export default NewStory;
