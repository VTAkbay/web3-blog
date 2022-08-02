import { useAccount } from "wagmi";
import PublishStoryForm from "../components/PublishStoryForm";

function NewStory() {
  const { isConnected, isConnecting, isReconnecting } = useAccount();

  return !isConnecting && !isReconnecting && isConnected ? (
    <PublishStoryForm />
  ) : (
    <div>Please connect wallet.</div>
  );
}

export default NewStory;
