import React, { useState } from 'react';
import Validation from './Validation';


const UseForm = () => {



    let [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({})


    const formValidation = (event) => {

        let { name, value } = event.target;

        setValues((contactValue) => {
            return {
                ...contactValue,
                [name]: value
            }
        });

    };

    const formSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
    };

    return { formSubmit, formValidation, errors }

}

export default UseForm
