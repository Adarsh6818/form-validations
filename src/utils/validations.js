import { ERR_MSGS } from "./constants"

const validations = (name, value, formData) => {

    switch(name) {
        case "userName": 
            if (value.length === 0) {
                return ERR_MSGS.empty_userName;
            }
            if (value.length < 3) {
                return ERR_MSGS.short_field;
            }
            return "";
    
        case "about":
            if (value.length === 0) {
                return ERR_MSGS.empty_about;
            }
            return "";

        case "firstName":
            if (value.length === 0) {
                return ERR_MSGS.empty_firstName;
            }
            if (value.length < 3) {
                return ERR_MSGS.short_field;
            }
            return "";

        case "lastName":
            if (value.length === 0) {
                return ERR_MSGS.empty_lastName;
            }
            if (value.length < 3) {
                return ERR_MSGS.short_field;
            }
            return "";
        
        case

            default: return "";
}