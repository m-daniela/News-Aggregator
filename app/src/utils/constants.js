
export const baseUrl = "http://localhost:5000/";
export const getArticlesUrl = (source) => `${baseUrl}${source}`;
export const getByCategoryUrl = (source, category) => `${baseUrl}${source}/${category}`;
export const getArticleUrl = (source) => `${baseUrl}${source}/article`;


export const dummySources = ["a", "b", "c"];

export const dummyNews = [
    {
        title: "Title1", 
        intro: "Intro lorem ipsum", 
        link: "https://",
        date: "1234"
    },
    {
        title: "Title2", 
        intro: "Intro lorem ipsum", 
        link: "https://",
        date: "1234"
    },
    {
        title: "Title3", 
        intro: "Intro lorem ipsum", 
        link: "https://",
        date: "1234"
    },
    {
        title: "Title4", 
        intro: "Intro lorem ipsum", 
        link: "https://",
        date: "1234"
    },
];