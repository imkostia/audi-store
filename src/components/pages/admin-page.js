import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { WithCarService } from "../hoc";
import { fetchCars, deleteCar } from "../../actions";

import Spinner from "../spinner";

const AdminPage = ({ carService }) => {
  const dispatch = useDispatch();

  const { cars, loading } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchCars(carService)());
  }, [carService, dispatch]);

  const onRemoveItem = (id) => {
    dispatch(deleteCar(carService)(id));
  };

  if (loading) {
    return <Spinner />;
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
        <div className="admin__table">
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
              {cars &&
                cars.map((car) => {
                  return (
                    <tr key={car.id}>
                      <td>{car.id}</td>
                      <td>{`${car.brand} ${car.model}`}</td>
                      <td>{car.price}</td>
                      <td>
                        <Link to={`/admin/${car.id}`}>
                          <button>edit</button>
                        </Link>
                        <button onClick={() => onRemoveItem(car.id)}>
                          remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithCarService()(AdminPage);
