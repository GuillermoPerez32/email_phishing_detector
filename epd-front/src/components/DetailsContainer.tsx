import { CircularProgress } from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { useGetEmailByIdQuery } from "../services/email";

const DetailsContainer = () => {
  const emailId = useAppSelector((state) => state.emails.emailId);
  const { data, isLoading, refetch } = useGetEmailByIdQuery(emailId);

  const features = data?.features;

  console.log(features);

  useEffect(() => {
    refetch();
  }, [emailId]);

  return (
    <div>
      {isLoading ? (
        <CircularProgress isIndeterminate />
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
