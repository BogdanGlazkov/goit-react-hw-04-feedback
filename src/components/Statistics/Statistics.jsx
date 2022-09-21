import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.stat}>
      <li className={s.statItem}>
        Good: <span className={s.statNum}>{good}</span>
      </li>
      <li className={s.statItem}>
        Bad: <span className={s.statNum}>{bad}</span>
      </li>
      <li className={s.statItem}>
        Neutral: <span className={s.statNum}>{neutral}</span>
      </li>
      <li className={s.statItem}>
        Total: <span className={s.statNum}>{total}</span>
      </li>
      <li className={s.statItem}>
        Positive:{' '}
        <span className={s.statNum}>
          {isNaN(positivePercentage) ? 0 : `${Math.round(positivePercentage)}%`}
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
