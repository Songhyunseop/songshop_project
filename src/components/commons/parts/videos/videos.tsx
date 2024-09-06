import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Main_Theme = styled.p`
  position: absolute;
  top: 55%;
  z-index: 99;
  width: 100%;
  font-size: 3.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  transition: all 0.5s ease;
  opacity: 0;

  ::after {
    content: 'WELCOME TO SONGSHOP';
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    font-size: 1.5rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  transition: all 0.5 ease;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
  }

  :hover::before {
    background-color: gray;
    opacity: 0.5;
  }

  :hover ${Main_Theme} {
    opacity: 1;
  }
`;

const Styled_ReactPlayer = styled(ReactPlayer)`
  position: relative;
  ::after {
    content: '';
    display: block;
    padding-bottom: 50%;
  }
  video {
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    object-fit: fill;
  }
`;

const Player_PlaceHolder = styled.div<{ isMounted: boolean }>`
  height: 100vh;
  /* background-color: lightgray; */
`;

const videoUrls = ['/videos/shopvid1.mp4', '/videos/shopvid2.mp4'];
const randomPhrases = [
  '새로운 시작은 늘 캐쥬얼하게 송샵에서',
  '나만을 위한 코디, 송샵에서 확인해보세요',
  '나의 트렌디를 뽐내고 싶다면? 지금 해 송샵',
  '이번 주, 입을게 고민된다면? 역시나 이곳',
  '당신의 스타일로 당신만의 코디를 맞춰보세요',
];

export const VideosPlayer = () => {
  const [phrase, setPhrase] = useState(randomPhrases[0]);
  const [isMounted, setIsMounted] = useState(false);

  let isRunning = false;
  let timer: ReturnType<typeof setTimeout>;

  const delaytoTrigger = (e) => {
    if (isRunning) clearTimeout(timer);

    isRunning = true;
    timer = setTimeout(() => {
      if (e._reactName === 'onMouseLeave') setPhrase(changePhrase());
      isRunning = false;
    }, 1500);
  };

  const changePhrase = () => {
    const index = Math.floor(Math.random() * 5);

    return randomPhrases[index];
  };

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <VideoWrapper onMouseEnter={delaytoTrigger} onMouseLeave={delaytoTrigger}>
      <Main_Theme>{phrase}</Main_Theme>
      {isMounted ? (
        <Styled_ReactPlayer
          url={videoUrls}
          playing
          muted
          loop
          width={'100%'}
          height={'100vh'}
        />
      ) : (
        <Player_PlaceHolder></Player_PlaceHolder>
      )}
    </VideoWrapper>
  );
};
