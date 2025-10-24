import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/groupms';

class GroupmService {
    getAll() {
        return axios.get(API_BASE_URL);
    }

    getOne(id) {
        return axios.get(`${API_BASE_URL}/${id}`);
    }

    create(data) {
        return axios.post(API_BASE_URL, data);
    }

    update(id, data) {
        return axios.put(`${API_BASE_URL}/${id}`, data);
    }

    delete(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new GroupmService();