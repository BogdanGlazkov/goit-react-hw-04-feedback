import React from "react";
import PropTypes from 'prop-types';
import s from './Feedback-options.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={s.optionsList}>
            {options.map(opt => <li key={opt}>
                <button className={s.btn} type="button" onClick={() => onLeaveFeedback(opt)}>{opt}</button>
            </li>)}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
