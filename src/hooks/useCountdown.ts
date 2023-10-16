'use client';
import { useState, useEffect, useCallback } from 'react';

export type UseCountdownReturnType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const useCountdown = (targetDate: Date): UseCountdownReturnType => {
  const calculateTimeLeft = useCallback((): UseCountdownReturnType => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: UseCountdownReturnType = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<UseCountdownReturnType>(
    calculateTimeLeft(),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};

const getLeftTime = (time: UseCountdownReturnType): string => {
  return time.days >= 1
    ? time.days + (time.days > 1 ? ' days' : ' day')
    : time.hours >= 1
    ? time.hours + (time.hours > 1 ? ' hours' : ' hour')
    : time.minutes >= 1
    ? time.minutes + (time.minutes > 1 ? ' minutes' : ' minute')
    : time.seconds >= 1
    ? time.seconds + (time.seconds > 1 ? ' seconds' : ' second')
    : 'time passed';
};

export { useCountdown, getLeftTime };
