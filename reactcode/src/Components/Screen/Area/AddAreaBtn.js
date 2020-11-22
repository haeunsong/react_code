import React, { useState } from 'react';

const AddAreaBtn = () => {

    const [areaName,setAreaName] = useState('');
    return (
        <div>
            <input
                value={areaName}
            />
            
        </div>
    );
};

export default AddAreaBtn;