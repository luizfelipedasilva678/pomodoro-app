import React, { useState } from 'react';
import Button, { ButtonContainer } from './styled';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import getRandomArbitrary, { randomNumber } from '../../utils/RandomArbitrary';

function Tabs() {
  const [whichTabWillBeOpen, setWhichTabWillBeOpen] =
    useState<string>('pomodoro');
  const timesToStart = [1500, 600, 300];
  const keyValue = getRandomArbitrary(0, 100000) + randomNumber();

  function chooseTimeToStart(): JSX.Element {
    if (whichTabWillBeOpen === 'pomodoro') {
      return <TimeDisplay key={keyValue} timeToStart={timesToStart[0]} />;
    }

    if (whichTabWillBeOpen === 'long-break') {
      return <TimeDisplay key={keyValue} timeToStart={timesToStart[1]} />;
    }

    if (whichTabWillBeOpen === 'short-break') {
      return <TimeDisplay key={keyValue} timeToStart={timesToStart[2]} />;
    }

    return <TimeDisplay key={keyValue} timeToStart={timesToStart[0]} />;
  }

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => setWhichTabWillBeOpen('pomodoro')}>
          Pomodoro
        </Button>
        <Button onClick={() => setWhichTabWillBeOpen('long-break')}>
          Long break
        </Button>
        <Button onClick={() => setWhichTabWillBeOpen('short-break')}>
          Short Break
        </Button>
      </ButtonContainer>
      {chooseTimeToStart()}
    </>
  );
}

export default Tabs;
