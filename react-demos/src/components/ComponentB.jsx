import React from "react";
import { DataContext } from "../Context";

const ComponentB = () => {
  return (
    <DataContext.Consumer>
      {(context) => {
        return <div>ComponentB: {context.name}</div>;
      }}
    </DataContext.Consumer>
  );
};

export default ComponentB;
