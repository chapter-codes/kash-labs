import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Spinner from './Spinner';
function Fallback({searchParams}:{searchParams?:{search?: string}}) {

  
  return (
    <>
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
        <Skeleton
          direction="ltr" 
          count={1}
          className="grid grid-cols-2 mb-5  h-[300px]"
        />
        <Skeleton
          direction="ltr"
          count={1}
          className="grid grid-cols-2 mb-5 h-[300px]"
        />
        <Skeleton
          direction="ltr"
          count={1}
          className="grid grid-cols-2 mb-5  h-[300px]"
        />
        <Skeleton
          direction="ltr"
          count={1}
          className="grid grid-cols-2 mb-5 h-[300px]"
        />
      </div>
    </>
  );
}

export default Fallback