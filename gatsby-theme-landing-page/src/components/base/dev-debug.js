import * as React from "react";

const IS_DEV = process.env.NODE_ENV === "development";

export default function DevDebug(props) {
  if (!IS_DEV) return false;

  console.log(props);
  return <pre children={JSON.stringify(props, null, 2)} />;
}
