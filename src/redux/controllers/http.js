import axios from "axios";

const api = axios.create({
  baseURL: "http://c-carta.restoner-api.fun/",
  headers: {
    "X-Api-Key":
      "asdlKF0234nM0F9n-fpdkf'0234i8f-fdMNFDO98sdfdf-ewfw490erm0weiur03nrfwe",
    "Content-Type": "application/json",
  },
});

export default api;
