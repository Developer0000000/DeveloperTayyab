
const Validation = (values) => {

    let errors = {};

    let validEmail = /^([\d\w+\.%&_-]{0,25})\@([\d\w+\.%&_-]{0,25})\.([\w+]{2,8})$/;

    if (!values.fname) {
        errors.fname = "First Name is required."
    }

    if (!values.lname) {
        errors.lname = "Last Name is required."
    }

    if (!values.email) {
        errors.email = "Email is required."
    }
    else if (!validEmail.test(values.email)) {
        errors.email = 'Email is in-valid'
    }

    if (!values.message) {
        errors.message = "Message is required."
    }

    return errors;

}

export default Validation
