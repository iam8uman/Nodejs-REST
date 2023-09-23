// this file is for encryption and decryption of the values

import crypto from 'crypto'

export const random=()=> crypto.randomBytes(128).toString('base64');//generate ramdom value for password encryption
