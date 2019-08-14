import React from 'react';
import s from './SomeComponent.module.css';
import {NavLink} from "react-router-dom";
import SomeText from "./SomeText";

const SomeComponent = (props) => {
let text_s = props.someArr.map(t => <SomeText text={t.message} key={t.id}/>);

    return (
        <nav className={s.nav}>
            {props.someText}
            <div>
                <NavLink to='/another' activeClassName={s.activ}>
                    <div>Another</div>
                </NavLink>
                {text_s}
            </div>
        </nav>
    );
};
export default SomeComponent;
