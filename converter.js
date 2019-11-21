module.exports = {
    convertToBinary:function(number){
        let result = "";
        while (number >= 1){
            let remainder = number % 2
            result = remainder + result
            number = Math.floor(number / 2)
        }
        return result
    },
    convertToHexa:function(number){
        let result = "";
        while (number >= 1){
            let remainder = number % 16
            switch(remainder){
                case 10: result = "A" + result
                break;
                case 11: result = "B" + result
                break;
                case 12: result = "C" + result
                break;
                case 13: result = "D" + result
                break;
                case 14: result = "E" + result
                break;
                case 15: result = "F" + result
                break;
                default: result = remainder + result

            }
            number = Math.floor(number / 16)
        }
        return result
    }
}