import { useAccount } from "wagmi";
import Loader from "../components/Loader";
import PublishStoryForm from "../components/PublishStoryForm";

function NewStory() {
  const { isConnected, isConnecting, isReconnecting } = useAccount();

  return (
    <>
      {isConnecting && isConnecting && <Loader />}

      {!isConnecting && !isReconnecting && !isConnected && (
        <div>Please connect wallet.</div>
      )}

      {!isConnecting && !isReconnecting && isConnected && <PublishStoryForm />}
    </>
  );
}

export default NewStory;
