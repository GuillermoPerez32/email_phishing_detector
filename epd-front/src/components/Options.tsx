// TODO
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const Options = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the file
    console.log(file);
  };

  return (
    <label>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <IconButton
        aria-label={"Add Email"}
        icon={<AddIcon />}
        w="10%"
      ></IconButton>
    </label>
  );
};

export { Options };
