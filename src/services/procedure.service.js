import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

class ProcedureServices {
  getAllProcedures() {
    return axios
      .get(`${API_URL}/procedures`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  getOneProcedure(id) {
    return axios
      .get(`${API_URL}/procedures/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}

export default new ProcedureServices();
