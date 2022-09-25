import React, { memo, ReactElement, useRef, useState } from 'react'

import { MioHomeDiv } from './style'
import { HOMEHEIGHT } from '../../common/home';

const MioHome:React.FC = memo(() => {
  const homeRef = useRef( null as null | {} as HTMLDivElement);
  const [pageTop,setPageTop] = useState(0);
  const [scrollFlag,setScrollFlag] = useState(false);

  // methods
  const pageScroll = (e:React.UIEvent<HTMLDivElement, UIEvent>):void => {
    const _scrollTop:number = Math.floor(e.currentTarget.scrollTop);
    const _oneHeight:number = Math.floor(e.currentTarget.scrollHeight/HOMEHEIGHT);
    console.log(pageTop,_scrollTop,_oneHeight);
              
    if(_scrollTop > pageTop && !scrollFlag) {
      console.log(2);
      
      homeRef.current.scrollTo({ top: pageTop+_oneHeight, behavior: 'smooth'});
      setScrollFlag(true);
      setPageTop(pageTop+_oneHeight);      
    }

    if(_scrollTop < pageTop && !scrollFlag) {
      console.log(1);

      homeRef.current.scrollTo({ top: pageTop-_oneHeight, behavior: 'smooth'});
      setScrollFlag(true)
      setPageTop(pageTop-_oneHeight);
    }

    if(scrollFlag && _scrollTop===pageTop) {
      setScrollFlag(false);
    }
  }

  return (
    <MioHomeDiv ref={homeRef} 
                onScroll={e => pageScroll(e)}
    >
      <div className="bg"></div>
      <div className="content">123</div>
    </MioHomeDiv>
  )
})

export default MioHome