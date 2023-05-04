import { memo } from "react";

const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});

export default Name;
