import React from "react";
import CarListItem from "../car-list-item";
import { connect } from "react-redux";

import { WithCarService } from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchCars } from "../../store/thunks/cars";
import { addCarToCart } from "../../store/actions/cart";
import { compose } from "../../utils";
import "./car-list.css";

class CarList extends React.Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    const { cars, loading, error, onAddToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="car-list">
        {cars &&
          cars.map((car) => {
            return (
              <CarListItem
                key={car.id}
                car={car}
                onAddToCart={() => onAddToCart(car.id)}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ carsStore }) => {
  return {
    cars: carsStore.cars,
    loading: carsStore.loading,
    error: carsStore.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { carService } = ownProps;
  return {
    fetchCars: () => dispatch(fetchCars(carService)()),
    onAddToCart: (id) => dispatch(addCarToCart(id)),
  };
};

export default compose(
  WithCarService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CarList);
