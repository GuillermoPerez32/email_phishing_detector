// TODO
import { AddIcon } from "@chakra-ui/icons";
import { IconButton, chakra } from "@chakra-ui/react";
import { useRef } from "react";
import { uploadEmail } from "../helpers/uploadEmail";

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
      <chakra.div display="inline-block">
        <input
          type="file"
          accept=".eml"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-upload"
          ref={inputRef}
        />
        <IconButton
          type="button"
          aria-label={"Add Email"}
          icon={<AddIcon />}
          onClick={handleButtonClick}
          w="10%"
        ></IconButton>
      </chakra.div>
    </label>
  );
};

export { Options };
