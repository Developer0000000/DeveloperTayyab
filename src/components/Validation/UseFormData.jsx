import { useState } from 'react';
import Validation from './Validation';


const UseFormData = () => {



    let [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});


    const formValidation = (event) => {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });

    };


    const formSubmit = async (e) => {

        if (values.fname === '' || values.lname === '' || values.email === '' || values.message === '') {
            setErrors(Validation(values));
            e.preventDefault();
        }

    };


    return { formSubmit, formValidation, errors }

}

export default UseFormData
