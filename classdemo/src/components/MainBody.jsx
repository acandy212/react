//create a functional component with hooks
import React, { useState } from 'react';

function MainBody(){
    const [name, setName] = useState('');

    function handleChange(e){
        setName(e.target.value);
    }

    return(
        <div>
            <h3> Your name is: <i>{name}</i></h3>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}

export default MainBody