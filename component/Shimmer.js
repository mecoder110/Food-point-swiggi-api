// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(20).fill("").map((e,index)=>{
       return <CardShimmer key={index} className="shimmer-card"></CardShimmer>
      })}      
    </div>
  );
};

export default Shimmer;
