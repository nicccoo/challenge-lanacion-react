import axios from "axios";

export const fetchData = async () => {
    try {
        const res = await axios.get('https://api-test-ln.herokuapp.com/articles');
        const data = await res.data.articles;
        const filteredArticles = data
            .filter(art => art.subtype == '7')
        return filteredArticles;
    } catch (error) {
        console.error(error);
    }
}

