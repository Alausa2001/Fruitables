const randomPassword = async (length, type = "alphaNumeric") => {
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


export default randomPassword;