import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars, deleteCar } from "../../store/thunks/cars";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const AdminPage = () => {
  const dispatch = useDispatch();

  const { cars, loading, error } = useSelector(({ carsStore }) => carsStore);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const onRemoveItem = (id) => {
    dispatch(deleteCar(id));
  };

  const table = (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Navigation</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => {
          return (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{`${car.brand} ${car.model}`}</td>
              <td>{car.price}</td>
              <td>
                <Link to={`/admin/${car.id}`}>
                  <button>edit</button>
                </Link>
                <button onClick={() => onRemoveItem(car.id)}>remove</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div className="admin">
      <h1 className="admin__title">Admin panel</h1>
      <div className="admin__content">
        <div className="admin__nav">
          <Link to="/admin/new">
            <button>New</button>
          </Link>
        </div>
        <div className="admin__table"></div>
        {loading ? (
          <Spinner />
        ) : !loading && cars.length ? (
          table
        ) : (
          <h1>You have no cars yet, please, add new car</h1>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
