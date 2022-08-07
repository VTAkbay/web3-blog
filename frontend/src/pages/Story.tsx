import { useParams } from "react-router-dom";
import StoryComponent from "../components/StoryComponent";

export default function Story() {
  let { storyId }: any = useParams();

  return <StoryComponent storyId={storyId}></StoryComponent>;
}
