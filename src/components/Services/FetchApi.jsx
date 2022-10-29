import axios from "axios";
const BASE_URL = 'https://pixabay.com/api/';
const key = '29404582-ff8d29a0dc81dbac31eded24e';
const per_page = 12;

const fetchApi = async (imageName, page) => {
    const response = await axios.get(
        `${BASE_URL}?key=${key}&q=${imageName}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    );
    return response.data;
}
export default fetchApi;
