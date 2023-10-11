// import { useAppSelector } from "../app/hooks";
import { Alert, Box, Button, Snackbar, styled } from "@mui/material";
import { Card } from "../components/Card";
import EmailsTable from "../components/EmailsTable/EmailsTable";
import { Add } from "@mui/icons-material";
import { useUploadEmailMutation } from "../services/email";
import { useEffect, useState } from "react";
// import { uploadEmail } from "../../helpers/uploadEmail";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const EmailPhishing = () => {
  const [uploadEmail, { isSuccess, requestId, isUninitialized, isLoading }] =
    useUploadEmailMutation();
  const [snackOpen, setSnackOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!isUninitialized) {
      setSnackOpen(true);
    }
  }, [requestId]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Do something with the selected file
      uploadEmail(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    files.map(async (file) => {
      uploadEmail(file);
    });

    setDragging(false);
  };

  const handleDragEnd = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("drag end");

    setDragging(false);
  };

  // const handleButtonClick = (event: any) => {
  //   event.preventDefault();
  //   inputRef.current?.click();
  // };

  return (
    <Card
      height="70%"
      padding="24px"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      boxSizing="content-box"
      border={dragging ? "dashed" : "none"}
    >
      <Box mb={3}>
        <Button
          component="label"
          variant="contained"
          color="success"
          startIcon={<Add />}
        >
          Add new Email
          <VisuallyHiddenInput onChange={handleFileChange} type="file" />
        </Button>
      </Box>
      <EmailsTable />
      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        onClose={() => setSnackOpen(false)}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity={isSuccess ? "success" : isLoading ? "warning" : "error"}
          sx={{ width: "100%" }}
        >
          {isSuccess
            ? "Success!"
            : isLoading
            ? "Loading"
            : "There was an error"}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export { EmailPhishing };
