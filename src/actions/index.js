import axios from 'axios';



export const fetchPosts = () => dispatch =>  {
    // This request will pull posts from json file
    // const request = axios.get(`https://zenzelya.github.io/react-redux-blog/data/posts.json`);
return fetch('https://zenzelya.github.io/react-redux-blog/data/posts.json')
        .then(response => {
            return response.json();
        })
        .then(response => {
            return {type: 'FETCH_POSTS', payload: response.posts};
        })
        .catch( console.log );
};


export function fetchComents() {
    // This request will pull posts from json file
    const request = axios.get(`https://zenzelya.github.io/react-redux-blog/data/coments.json`);
             
    return {
        type: 'FETCH_COMENTS',
        payload: request.coments
    }
}




