enum Status {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500,
}

enum Message {
    MISSING_CREDENTIALS = 'You must provide an Username and a Password.',
    USERNAME_IN_USE = 'Username already in use.',
    INVALID_CREDENTIALS = 'Invalid Username login credentials.',
    INVALID_PASSWORD = 'Invalid Password login credentials.',
    UNAUTHORIZED = 'Unauthorized',
    INVALID_REGISTER = 'Invalid register !!!',
    INVALID_LOGIN = 'Invalid login !!!',
}

export {
    Status,
    Message,
}