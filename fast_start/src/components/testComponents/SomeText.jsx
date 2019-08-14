import React from 'react';
import s from './SomeComponent.module.css';

const SomeText = (props) => {
    return (
        <div className={s.someText}>
            {props.text}
        </div>
    );
};
export default SomeText;
