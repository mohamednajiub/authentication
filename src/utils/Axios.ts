import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: `https://api.evaluation-system.ieeehsb.org/api`,
});

export default axiosInstance;
