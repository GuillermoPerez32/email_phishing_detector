// TODO
// import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Box } from "@mui/material";
import { useRef } from "react";
import { uploadEmail } from "../helpers/uploadEmail";
import { Add } from "@mui/icons-material";

const Options = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Do something with the selected file
      uploadEmail(selectedFile);
    }
  };

  const handleButtonClick = (event: any) => {
    event.preventDefault();
    inputRef.current?.click();
  };

  return (
    <label htmlFor="file-upload">
      <Box display="inline-block">
        <input
          type="file"
          accept=".eml"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-upload"
          ref={inputRef}
        />
        <Box width="10%">
          <IconButton
            type="button"
            aria-label={"Add Email"}
            onClick={handleButtonClick}
          >
            <Add />
          </IconButton>
        </Box>
      </Box>
    </label>
  );
};

export { Options };
