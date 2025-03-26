import "./loader.css";

const UseLoader = (props) => {
  const size = props.size ? props.size : "medium";
  let className = "loader";
  className += ` loader-${size}`;

  return <div className={className} />;
};

export default UseLoader;
