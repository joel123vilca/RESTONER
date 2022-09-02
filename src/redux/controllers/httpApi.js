import axios from "axios";

const apiCustomer = axios.create({
  baseURL: "https://web-comensal.api-restoner.cyou/",
  headers: {
    "X-Api-Key":
      "asdlKF0234nM0F9n-fpdkf'0234i8f-fdMNFDO98sdfdf-ewfw490erm0weiur03nrfwe",
    "Content-Type": "application/json",
  },
});

export default apiCustomer;
