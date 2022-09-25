import React, { memo, useEffect, useMemo, useState } from 'react'

import { LOADINGSTR } from '../../../common/loading'
import { MioPageLoadingDiv } from './style'


const MioPageLoading: React.FC = memo(() => {  
  const [jumpIndex,setJumpIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if(jumpIndex===LOADINGSTR.length-1) {        
        setTimeout(() => {
          setJumpIndex(0);
        },666);
      }else {
        setJumpIndex(jumpIndex+1);
      }      
    },333)
    
  },[jumpIndex])
  
  const jumpStr = (index:number):string => {
    let _str:string = 'letter';
    const _number:number = jumpIndex-index;
    const _number2:number = index-jumpIndex;
    if(_number==1||_number==2||_number==0||_number2==LOADINGSTR.length-1||_number2==LOADINGSTR.length-2) {
      _str = `${_str} active`;
    }    
    return _str;
  } 

  return (
    <MioPageLoadingDiv>
      <div className="loading">
        {
          LOADINGSTR.map((item,index) => (
            <p key={item.key} 
               className={jumpStr(index)}              
               style={{color:item.color,textShadow:`3px 3px 5px #f2f`}}
            >
              {item.name}
            </p>
          ))
        }
      </div>      
    </MioPageLoadingDiv>
  )
})

export default MioPageLoading
