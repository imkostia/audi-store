import React from "react";
import { CarServiceConsumer } from "../car-service-context";

const WithCarService = () => (Component) => {
  return (props) => {
    return (
      <CarServiceConsumer>
        {(carService) => {
          return <Component {...props} carService={carService} />;
        }}
      </CarServiceConsumer>
    );
  };
};

export default WithCarService;
