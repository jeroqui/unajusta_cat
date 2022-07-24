import jsonwebtoken from 'jsonwebtoken';



export const createTokens = (user) => {
    const refreshToken = jsonwebtoken.sign({ userId: user.id, tokenCount: user.tokenCount }, process.env.REFRESH_TOKEN_SECRET as string, {
        expiresIn: "7d"
    });
    
    const accessToken = jsonwebtoken.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: "15min"
    });

    return {refreshToken, accessToken}
}