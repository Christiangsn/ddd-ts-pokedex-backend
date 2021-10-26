import { sign } from 'jsonwebtoken'
import { authConfig } from './AuthConfig'
import IAuth from './ITokenDTO'

export async function genetarionToken (user: IUser): Promise<string> {
  const token = sign({}, authConfig.secret, {
    subject: user.id,
    expiresIn: 86400
  })
  return token
}
