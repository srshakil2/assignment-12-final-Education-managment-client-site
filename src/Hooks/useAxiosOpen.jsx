import axios from "axios";

const axiosOpen = axios.create({
  baseURL: "https://education-server-site.vercel.app",
});

const useAxiosOpen = () => {
  return axiosOpen;
};

export default useAxiosOpen;
