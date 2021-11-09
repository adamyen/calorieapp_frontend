import React, { useState } from 'react';
import ChooseGoal from './ChooseGoal';
import SetBodyData from './SetBodyData';
import './index.css';

function Setting() {
    const [type, setType] = useState(null);
    return (
        <>
            {type === null
                ? (<ChooseGoal onClick={setType}/>)
                : (<SetBodyData />)
            }
        </>
    );
}

export default Setting;
