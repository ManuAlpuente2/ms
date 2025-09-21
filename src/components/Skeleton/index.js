import "./Skeleton.scss";

const Skeleton = ({ className = "", width = "100%", height = "100%" }) => {
  return (
    <span className={`skeleton ${className}`} style={{ width, height }}></span>
  );
};

export default Skeleton;
