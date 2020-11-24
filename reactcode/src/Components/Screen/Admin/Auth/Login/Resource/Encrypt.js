import crypto from "crypto"

// 비번 암호화
export const encryptPassword=(password)=>{
    return new Promise((resolve,reject)=>{
        resolve(crypto.createHash("sha512").update(password).digest("hex"))
    });
}