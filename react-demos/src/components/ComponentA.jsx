import React, { useContext } from "react";
import { DataContext } from "../Context";

const ComponentA = () => {
  const context = useContext(DataContext);
  return (
    // Method 1:
    // <DataContext.Consumer>
    //   {(context) => {
    //     return <div>ComponentA: {context.name}</div>;
    //   }}
    // </DataContext.Consumer>
    // Method 2:
    <div>ComponentA: {context.name}</div>
  );
};

export default ComponentA;
