import React from "react";
import {SetFilterAC} from "../../state/app-reducer";

const UpFilterTabs=({SetFilterAC})=>{
    return <div>
        <div onClick={()=>SetFilterAC('FASTEST')}>Самый быстрый</div>
        <div onClick={()=>SetFilterAC('CHEAPER')}>Самый дешевый</div>
    </div>
}
export default UpFilterTabs;