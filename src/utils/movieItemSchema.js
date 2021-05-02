const movieSchema = [
    {
        name: "title",
        type: "text",
    },
    {
        name: "director",
        type: "text",
    },
    {
        name: "screenwriter",
        type: "text",
    },
    {
        name: "cast",
        type: "text",
    },
    {
        name: "runtime",
        type: "number",
    },
    {
        name: "year",
        type: "number",
    },
    {
        name: "rating",
        type: "number",
    },
    {
        name: "poster",
        type: "text",
    },
    {
        name: "platform",
        type: "text",
    },
    {
        name: "genre",
        type: "text",
    },
];

const movieItem = {
    title: "",
    director: "",
    screenwriter: "",
    moviecast: "",
    runtime: null,
    year: null,
    rating: null,
    poster: "",
    platform: "",
    userid: null,
};

export { movieSchema, movieItem };
