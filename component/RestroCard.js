import { imgUrl } from "../config";

const RestroCard = ({ data }) => {
    return (
      <div className="card">
        <img alt="card" src={imgUrl + data?.info?.cloudinaryImageId}></img>
        <h1>{data?.info?.name}</h1>
        <h2>{data?.info?.cuisines?.map((c) => c).join(", ")}</h2>
        <h3>{data?.info?.avgRating}</h3>
        
      </div>
    );
  };

export default RestroCard;