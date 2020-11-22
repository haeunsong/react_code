import React,{useState} from 'react';
import AddAreaBtn from './AddAreaBtn';

const AreaList = () => {

    const [areaInfo,setAreaInfo] = useState([]);
    const [areaName,setAreaName] = useState('');
    const list=[];

    const addAreaList=(e)=>{
        console.log('hi')
        console.log(e);
        // setAreaInfo(areaInfo.push(areaName))
        // 리액트에서는 push사용불가!!
        // setAreaInfo(function(){
        //     areaInfo.concat(areaName);
        //     // console.log(areaInfo);
        //     // const list = areaInfo.map(area=>{
        //     //     return <button>{area}</button>
        //     // })
        //     // console.log(list);

        setAreaInfo(areaInfo.concat(areaName));
        console.log(areaInfo);
    }
    const mapping=()=>{
        list = areaInfo.map((area,id)=>{
            return <AddAreaBtn info={area} key={id}/>
        })
        console.log(list)
        
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
                <input 
                name="areaName" 
                className="areaList"
                placeholder="건물 추가" 
                value={areaName}
                onChange={e=>setAreaName(e.target.value)} 
                />
                <button className="addAreaBtn" onClick={addAreaList}>등록</button>  
            {/* </form> */}
            <button>
                {list}
            </button>
            
        </div>
    );
};

export default AreaList;