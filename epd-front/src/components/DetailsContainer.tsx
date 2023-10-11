import { CircularProgress } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { useGetEmailByIdQuery } from "../services/email";

const DetailsContainer = () => {
  const emailId = useAppSelector((state) => state.emails.emailId);
  const { data, isLoading, refetch } = useGetEmailByIdQuery(emailId);

  const features = data?.features;

  useEffect(() => {
    refetch();
  }, [emailId]);

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {Object.keys(features).map((e) => (
            <div>{features[e]}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsContainer;
