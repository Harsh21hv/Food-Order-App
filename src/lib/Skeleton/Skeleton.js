export default function Skeleton(props) {
    let width = props.width || "50px",
      height = props.height || "50px",
      radius = props.radius || "4px";
  
    return (
      <div
        className="skeleton"
        style={{
          height: `${height}`,
          width: `${width}`,
          borderRadius: `${radius}`,
        }}
      />
    );
  }

  