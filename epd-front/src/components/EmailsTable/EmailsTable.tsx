import {
  useGetEmailsQuery,
  useUploadEmailMutation,
  // useUploadEmailMutation,
} from "../../services/email";
// import { uploadEmail } from "../../helpers/uploadEmail";

const EmailsTable = () => {
  const table = {
    header: [
      "No",
      "sender",
      "dest",
      "subject",
      "date created",
      "phishing",
      "Delete",
    ],
  };

  const { data } = useGetEmailsQuery("df");

  const [uploadEmail] = useUploadEmailMutation();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    files.map(async (file) => {
      uploadEmail(file);
    });
  };

  return <h1>Table</h1>;
};

export default EmailsTable;
