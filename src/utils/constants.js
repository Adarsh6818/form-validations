
export const INITIAL_FORM_DATA = {
    userName: "",
    about: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    byEmails: [],
    pushNotifications: ""
}

export const ERR_MSGS = {
    empty_userName: "Username cannot be empty",
    short_field: "Please enter atleast 3 characters",
    userName_exists: "Username already taken",
    empty_about: "This section is mandatory. Please fill appropriate description",
    empty_firstName: "Oops! you left this field mistakenly",
    empty_lastName: "Oops! you left this field mistakenly",
    empty_email: "Oops! you left email mistakenly",
    empty_country: "Please mention your country",
    empty_Address: "Please provide full address",
    empty_Postal: "Postal code is mandatory",
}

export const SUCCESS_MSG = "Your details have been captured successfully. Have a nice day!"