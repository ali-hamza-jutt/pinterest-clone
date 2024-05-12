import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID grg-ueQMGoHj70zQhAHlJ_fqu6g6ChUn8-YIboJ40Eg"
    }
});
