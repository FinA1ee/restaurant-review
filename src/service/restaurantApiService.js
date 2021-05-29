import axios from "axios";

class RestaurantApiService {
  runGetRestaurantsNoFilter = (restPerPage, pages) => {
    return axios.get(
      `http://localhost:5000/api/v1/restaurants?restaurantsPerPage=${restPerPage}&page=${pages}`
    );
  };

  runGetRestaurantsFilter = (restPerPage, pages, name, zipcode, cuisine) => {
    return axios.get(
      `http://localhost:5000/api/v1/restaurants?restaurantsPerPage=${restPerPage}&page=${pages}&name=${name}&zipcode=${zipcode}&cuisine=${cuisine}`
    );
  };

  runGetAllCuisine = () => {
    return axios.get(`http://localhost:5000/api/v1/restaurants/cuisines`);
  };
}

export default new RestaurantApiService();
