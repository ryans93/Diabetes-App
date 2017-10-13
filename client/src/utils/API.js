import axios from "axios";

const API = {
    newUser: (newUser) => {
        let weight= parseInt(newUser.weight);
        let ic= 1800 / weight;
        let ip= ic * (1 / .36);
        let bsRaise= 707.54574 * Math.pow(weight, -1.000424505);
        let cf= ic * bsRaise;
        let calcObj= {
            ic: ic,
            ip: ip,
            bsRaise: bsRaise,
            cf: cf
        }
        Object.assign(newUser,calcObj);
        console.log(newUser);
        return axios.post("/api/newUser", newUser);
    },


};
export default API;