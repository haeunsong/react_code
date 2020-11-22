import React,{useState} from 'react';
import AreaListForm from './AreaListForm';

// /area/list
const AreaList = () => {
    const [areaInfo,setAreaInfo] = useState([]);
    return (
        <div>
            <AreaListForm />
            

            
        </div>
    );
};

export default AreaList;