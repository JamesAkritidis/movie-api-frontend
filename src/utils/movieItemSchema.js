const movieSchema = [
    {
        name: "title",
        type: "text",
    },
    {
        name: "year",
        type: "number",
    },
    {
        name: "runtime",
        type: "number",
    },
    {
        name: "genres",
        type: "text",
    },
    {
        name: "overview",
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
        name: "imdblink",
        type: "text",
    },
    {
        name: "poster",
        type: "text",
    },
    {
        name: "watched",
        type: "checkbox",
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
