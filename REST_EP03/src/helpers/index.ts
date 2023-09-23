// this file is for encryption and decryption of the values

import crypto from "crypto";

const Secret = "SUMAN_REST_API";

export const random = () => crypto.randomBytes(128).toString("base64"); //generate ramdom value for password encryption
export const athentication = (salt: String, password: String) => {
  return crypto.createHmac("sha256", [salt, password].join('/')).update(Secret).digest("hex");
};
