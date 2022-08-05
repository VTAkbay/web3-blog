import { useAccount } from "wagmi";
import Loader from "../components/Loader";
import Story from "../components/Story";

function MyStories() {
  const { isConnected, isConnecting, isReconnecting } = useAccount();

  return (
    <>
      {isConnecting && isConnecting && <Loader />}

      {!isConnecting && !isReconnecting && !isConnected && (
        <div>Please connect wallet.</div>
      )}

      {!isConnecting && !isReconnecting && isConnected && <Story></Story>}
    </>
  );
}

export default MyStories;
