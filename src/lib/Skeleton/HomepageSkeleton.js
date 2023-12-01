import React from "react";
import Skeleton from "./Skeleton";

const HomepageSkeleton = () => {
  return (
    <div>
      <div className="homepage-skeleton">
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
       
      </div>
      <div className="homepage-skeleton">
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
        <Skeleton width="200px" height="450px" />
       
      </div>
    </div>
  );
};

export default HomepageSkeleton;