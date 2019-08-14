import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import SomeComponent from "./components/testComponents/SomeComponent";
import AnotherContainer from "./components/testComponents/AnotherContainer";
import * as axios from "axios";

const App = () => {
    const [data, setData] = useState([]);

    const getUsers = () => axios.get('http://localhost:7542/').then(res => setData(res.data));

    useEffect(getUsers, []);

    const myRef = useRef(null);

    const onClick = () => {
        axios.post('http://localhost:7542/', {name: myRef.current.value}).then(res => {
            console.log(res);
            getUsers();
        });
    };

    return (
        <div className='App'>
            <input ref={myRef} />
            <div>
                <button onClick={onClick}>new</button>
            </div>
            {data.map((u, i) => <div key={i}>{u.name}</div>)}


            {/*<SomeComponent someArr={[]}/>
            <div className='content'>
                <Route path='/another/:userId?' render={() => <AnotherContainer/>}/>
            </div>*/}
        </div>
    );
};
export default App;
