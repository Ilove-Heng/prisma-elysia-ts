function hashToken(token: string) {
    return new Bun.CryptoHasher("sha512").update(token).digest('hex')
}

export { hashToken }