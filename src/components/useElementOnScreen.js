import React,{useEffect,useState,useMemo,useRef} from 'react';

const useElementOnScreen=(options,targetRef)=>{
    const [isVisible,setIsVisible]=useState(false);
    
    const callbackFunction=entries=>{
      const [entry]=entries;
      console.log("hii")
      console.log(entry.target);
      if(entry.isIntersecting)
      entry.target.classList.toggle("sticky",entry.isIntersecting);
      
      //entry.target.classList.remove("sticky");
      //console.log(entry.target.classList);
      //entry.target.classList[0]="tickets";
      //console.log(entry.target.classList[0]);
      setIsVisible(entry.isIntersecting); 
    } 
    const optionsMemo =useMemo(()=>{
      return options
  },[options]);

  useEffect(()=>{
    const observer=new IntersectionObserver(callbackFunction,optionsMemo);
    const currentTarget=targetRef.current;
    if(currentTarget)
    observer.observe(currentTarget);
    return()=>{
      if(currentTarget)
      observer.unobserve(currentTarget);
    }  
  },[targetRef,optionsMemo]);
  return isVisible;
}

export default useElementOnScreen;