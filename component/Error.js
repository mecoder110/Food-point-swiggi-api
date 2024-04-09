import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Somthing went worng!!</h2>
      <h2>{err.status+"   :   "+err.statusTest}</h2>
    </div>
  );
};

export default Error;