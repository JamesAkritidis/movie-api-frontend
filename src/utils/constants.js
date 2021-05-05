const API_ROOT =
    process.env.NODE_ENV !== "production"
        ? "https://movie-picker-backend.herokuapp.com/"
        : "http://localhost:5000/";
export default API_ROOT;
