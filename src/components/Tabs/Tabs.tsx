import React, { useState } from 'react';
import Button, { ButtonContainer } from './styled';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import getTime from '../../utils/getTime';
import { POMODORO_BREAK, LONG_BREAK, SHORT_BREAK } from '../../constants';

function Tabs() {
  const [tab, setTab] = useState<string>(POMODORO_BREAK);
  const time = getTime(tab);

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => setTab(POMODORO_BREAK)}>Pomodoro</Button>
        <Button onClick={() => setTab(LONG_BREAK)}>Long break</Button>
        <Button onClick={() => setTab(SHORT_BREAK)}>Short Break</Button>
      </ButtonContainer>
      <TimeDisplay key={tab} timeToStart={time} />
    </>
  );
}

export default Tabs;
