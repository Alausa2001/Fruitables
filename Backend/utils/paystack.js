import axios from "axios";



const AlphaNumeric = (length, type = "alphaNumeric") => {
    let result = "";
    const characters = type === "alphaNumeric" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      : type === "alpha" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if(type === "alphaNumeric") {
      if(!(/\d/.test(result))){
        return AlphaNumeric(length, type);
      }
    }

    return result;
};



const paystackBaseUrl = "https://api.paystack.co";
const paystackTestKey = "sk_test_d8d2b8d3e090069f0cd74c6b87fe065aeffe0b8f"

const Paystack = () => {
    const baseUrl = paystackBaseUrl
    const key =  paystackTestKey 
    const headersRequest = { 'Content-Type': 'application/json', 'cache-control': 'no-cache', 'Authorization': `Bearer ${key}` };

        const InitializePayment = async (body) => {
                return await axios.post(`${baseUrl}/transaction/initialize`, { ...body, reference: AlphaNumeric(20).toUpperCase(),
                    channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"], invoice_limit: 0, currency: "NGN" },
                    { headers: { ...headersRequest } }).then((response) => {

                    return response.data;
                }).catch((error) => {
                    return error.response
                })
        }

        const VerifyPayment = async (reference) => {
                return await axios.get(`${baseUrl}/transaction/verify/${reference}`, { headers: { ...headersRequest } }).then((response) => {
                    return response.data;
                }).catch((error) => {
                    return error.response
                })
        }

    return {  InitializePayment, VerifyPayment };
}


export default Paystack;