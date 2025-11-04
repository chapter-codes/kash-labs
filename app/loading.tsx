import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
  return (
    <Skeleton className="grid md:grid-cols-2 gap-x-5 gap-y-10" height={400} />
  )
}

export default loading