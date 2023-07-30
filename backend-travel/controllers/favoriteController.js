import { favoriteCities } from "../data/db.js";

export const getFavorites = (req, res) => {
  if (favoriteCities) {
    res.status(200).json(favoriteCities);
  } else {
    const err = new Error({ message: "Failed to Fetch Favorites" });
    next(err);
  }
};

export const getFavoriteDescription = (req, res) => {
  const city = favoriteCities.find(
    (city) => city.cityName.toLowerCase() === req.query.cityname.toLowerCase()
  );
  if (city) {
    res.status(200).json(city.description);
  } else {
    res.status(404).json({ error: "City not found" });
  }
};
