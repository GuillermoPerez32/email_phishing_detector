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
  const [uploadEmail, { isSuccess, status, requestId }] =
    useUploadEmailMutation();
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    if (status !== "fulfilled" || status !== "rejected") {
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

  // const handleButtonClick = (event: any) => {
  //   event.preventDefault();
  //   inputRef.current?.click();
  // };

  return (
    <Card width="100%" height="70%" padding="24px">
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
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {isSuccess ? "Success!" : "There was an error"}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export { EmailPhishing };
