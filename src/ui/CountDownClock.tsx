"use client"
import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useLanguage } from '@/contexts/LanguageContext';

const CountdownClock=()=> {
  const { t } = useLanguage();
  
  // Set target date to be exactly 155 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 155);
  targetDate.setHours(0, 0, 0, 0); // Set to start of day
  
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ 
    expiryTimestamp: targetDate, 
    onExpire: () => console.warn('Countdown expired!') 
  });

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