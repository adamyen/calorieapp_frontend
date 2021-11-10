import React, { useState } from 'react';
import ChooseGoal from './ChooseGoal';
import SetBodyData from './SetBodyData';
import './index.css';

function Setting() {
    const [type, setType] = useState(0);
    return (
        <>
            {type === 0
                ? (<ChooseGoal onClick={setType}/>)
                : (<SetBodyData planType={type} popToTop={() => setType(0)}/>)
            }
        </>
    );
}

export default Setting;
