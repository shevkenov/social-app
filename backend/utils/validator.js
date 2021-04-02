const isEmpty = (string) => {
    if (!string.trim()) return true;

    return false;
}

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
};

const signUpValidator = (data) => {
    const errors = {};

    if(!isEmail(data.email)){
        errors.email = "Email is not valid!";
    }
    if(isEmpty(data.password)){
        errors.email = "Password shouldn't be empty!"
    }
    if(isEmpty(data.handle)){
        errors.handle = "Must not be empty!"
    }
    if(data.confirmPassword && (data.confirmPassword !== data.password)){
        errors.confirmPassword = "Both passwords should be identical!"
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0 ? true : false
    }
}

const loginValidator = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };

module.exports = {signUpValidator, loginValidator};