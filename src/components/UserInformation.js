import { useEffect } from "react";

let renderCount = 1;

const Component = ({ age }) => {
  useEffect(() => renderCount++);

  if (!age) return null;

  return (
    <div>
      {age < 18 ? (
        <span style={{ color: "red" }}>
          You are too young to be our employee
        </span>
      ) : (
        <span style={{ color: "blue" }}>You are old enough :)</span>
      )}
      <small> ({renderCount})</small>
    </div>
  );
};

export default Component;
