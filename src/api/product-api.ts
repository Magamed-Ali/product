import axios from "axios";
import {postType} from "../state/posts-reducer";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
    }
});

export const productAPI = {
    get_posts() {
        return instance.get<Array<postType>>("posts");
    },
    get_post_card(id: number){
        return instance.get<postType>(`posts/${id}`);
    }
};
