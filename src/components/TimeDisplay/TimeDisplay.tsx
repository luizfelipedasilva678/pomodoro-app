import React, { useEffect, useState } from 'react';
import { VscDebugStart } from 'react-icons/vsc';
import { BiReset, BiPauseCircle } from 'react-icons/bi';
import DataCreator from '../../utils/DataCreator';
import Main, { Button, Container, ButtonsWrapper } from './styled';
import TimeDisplayProtocol from '../../typings/timeDisplayProtocol';
import audio from '../../audio/src_audio_sound.mp3';

function TimeDisplay({ timeToStart }: TimeDisplayProtocol): React.ReactElement {
  const [time, setTime] = useState<number>(timeToStart);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const audioElement: HTMLAudioElement = new Audio(audio);

  function updateTime() {
    if (!isPaused) {
      if (time > 0) {
        setTime(time - 1);
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      updateTime();
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, isPaused]);

  return (
    <Container>
      <Main>{DataCreator.getDate(time)}</Main>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            setIsPaused(false);
            audioElement.play();
          }}
        >
          <VscDebugStart />
        </Button>
        <Button onClick={() => setTime(timeToStart)}>
          <BiReset />
        </Button>
        <Button onClick={() => setIsPaused(true)}>
          <BiPauseCircle />
        </Button>
      </ButtonsWrapper>
    </Container>
  );
}

export default TimeDisplay;
