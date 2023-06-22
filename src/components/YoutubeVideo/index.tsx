import { StyledYoutubeVideo } from './styles';

export type YoutubeVideoProps = {
  videoId: string;
};

const YoutubeVideo = ({ videoId }: YoutubeVideoProps) => {
  return (
    <StyledYoutubeVideo>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </StyledYoutubeVideo>
  );
};

export default YoutubeVideo;
