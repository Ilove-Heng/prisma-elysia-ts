import { jwt } from "@elysiajs/jwt"

function handleJWT() {
    return jwt({
        name: 'jwt',
        secret: 'Fischl von Luftschloss Narfidort',
        exp: '1m'
    })
}

export {
    handleJWT
}