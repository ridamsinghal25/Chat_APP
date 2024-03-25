import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_SECRET_KEY;

export function encryptData(data) {
  const encryptedUserData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  return encryptedUserData;
}

export function decryptData(encryptedUserData) {
  const decryptedUserData = CryptoJS.AES.decrypt(
    encryptedUserData,
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedUserData);
}
