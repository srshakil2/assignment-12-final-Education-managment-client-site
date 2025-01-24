import axios from "axios";

const axiosPrivet = axios.create({
  baseURL: "https://education-server-site.vercel.app",
});

const useAxiosPrivet = () => {
  return axiosPrivet;
};

export default useAxiosPrivet;
