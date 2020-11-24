import crypto from "crypto"

// 비번 암호화
// createHash: 사용할 해시 알고리즘 입력(sha512)
// update: 변환할 문자열 입력
// digest: 인코딩할 알고리즘 넣어주기(hex). 변환된 문자열 반환
export const encryptPassword=(password)=>{
    return new Promise((resolve,reject)=>{
        resolve(crypto.createHash("sha512").update(password).digest("hex"))
    });
}