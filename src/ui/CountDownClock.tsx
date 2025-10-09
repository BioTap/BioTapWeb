"use client"
import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useLanguage } from '@/contexts/LanguageContext';

const CountdownClock=()=> {
  const { t } = useLanguage();
  
  // Set the expiration timestamp based on the current time plus the desired duration
  const time = new Date();
  time.setDate(time.getDate() + 156); // 302 days
  time.setHours(time.getHours() + 18); // 2 hours
  time.setMinutes(time.getMinutes() + 28); // 59 minutes
  time.setSeconds(time.getSeconds() + 59); // 59 seconds

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: time, onExpire: () => console.warn('onExpire called') });

  return (
    <>
      <div className="time-count day">
        <span>{days}</span>{t('countdown.days')}
      </div>
      <div className="time-count hour">
        <span>{hours}</span>{t('countdown.hours')}
      </div>
      <div className="time-count min">
        <span>{minutes}</span>{t('countdown.mins')}
      </div>
      <div className="time-count sec">
        <span>{seconds}</span>{t('countdown.secs')}
      </div>
    </>
  );
}

export default CountdownClock;