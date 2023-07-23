import {
  POMODORO_BREAK,
  LONG_BREAK,
  SHORT_BREAK,
  LONG_BREAK_TIME,
  POMODORO_BREAK_TIME,
  SHORT_BREAK_TIME,
} from '../constants';

const getTime = (breakType: string): number => {
  switch (breakType) {
    case POMODORO_BREAK: {
      return POMODORO_BREAK_TIME;
    }
    case LONG_BREAK: {
      return LONG_BREAK_TIME;
    }
    case SHORT_BREAK: {
      return SHORT_BREAK_TIME;
    }
    default: {
      return POMODORO_BREAK_TIME;
    }
  }
};

export default getTime;
