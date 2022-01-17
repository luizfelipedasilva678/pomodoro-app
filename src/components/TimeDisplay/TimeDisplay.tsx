import React, { useEffect, useState } from 'react';
import DataCreator from '../../utils/DataCreator';
import Main from './styled';

function TimeDisplay(): React.ReactElement {
  const [time, setTime] = useState<number>(1500);

  function updateTime() {
    if (time > 0) {
      setTime(time - 1);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      updateTime();
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return <Main>{DataCreator.getDate(time)}</Main>;
}

export default TimeDisplay;
