import axios from 'axios'
import { toast } from 'react-toastify';


const Apis = {
    login: ({ email, password }) => {
        const userObject = {
            email: email,
            password: password
        };

        axios.post('http://localhost:3001/signin', userObject).then((res) => {
            console.log(res);
            if (res) {

                return res;
            }
        })



    },


    forgotPassword: (email) => {
        const bodyRequest = {
            email: email
        };

        return axios.post('http://localhost:8000/user/forgot-password', bodyRequest)
            .then((res) => {
                console.log(email);
                if (res) {
                    toast.success('Password reset email sent successfully!', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    return res;
                }
            })
            .catch((err) => {
                console.log(email);
                toast.error('No user found with this e-mail', {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }

};
export default Apis