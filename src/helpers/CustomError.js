export default class CustomError {
    static createError({ name = "Error", cause, message, code = 1 }) {
        const error = new Error(message, { cause })
        error.name = name
        error.code = code
        throw error
    }
}

export const EEror= {
    ROUTING_ERROR:1,
    INVALID_TYPES_ERROR:2,
    DATABASE_ERROR:3
}

export const generateUserErrorInfo = (user) => {

}
