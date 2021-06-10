import React from 'react';

// style
import s from './ErrorMessage.module.scss';

interface MessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: MessageProps) => {
  return <p className={s.error}>{message}</p>;
};
