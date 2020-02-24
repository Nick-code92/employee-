import axios from "axios";
export default {
    getEmployee: function (how_many){
        return axios.get(`https://randomuser.me/api/?results=${how_many}&nat=us`)
    }
}
