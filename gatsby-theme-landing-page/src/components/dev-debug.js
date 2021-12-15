import * as React from "react";

const IS_DEV = process.env.NODE_ENV === "development";

export default function DevDebug(props) {
  if (!IS_DEV) return false;

  console.log(props);
  return (
    <div
      style={{
        maxWidth: 768,
        margin: "auto",
        padding: 32,
        backgroundColor: "#fbb",
      }}
    >
      <h2 style={{ margin: 0, color: "#f30" }}>
        ⚠️ Could not find the "{props.component}" component.
      </h2>
      Ensure that the component exists, is named correctly, and that it's
      included in: <code>sections/index.js</code>
    </div>
  );
}
