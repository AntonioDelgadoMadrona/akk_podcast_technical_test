// DEPENDENCIES
import styled from "styled-components";

export const EpisodeDetailsInfoContainer = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  padding: 0px 20px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #585858;
  margin-top: 3px;
  font-style: italic;
`;

export const AudioPlayer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;

  & > audio {
    width: 100%;
    height: 100%;
  }

  & > audio::-webkit-media-controls-panel {
    background-color: #1a73e8;
  }

  & > audio::-webkit-media-controls-current-time-display,
  & > audio::-webkit-media-controls-time-remaining-display {
    color: white;
  }
`;
