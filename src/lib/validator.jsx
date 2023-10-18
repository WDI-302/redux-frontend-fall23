const checker = (key, value) => {
    switch (key) {
        // case 'firstname':  //applies to just firstname
        //     if (value === "Brad") {
        //         return {error: true, message: 'Cannot be Brad'}
        //     }
        //     // only applies to this case 
            // if (value === '') {
            //     return {
            //         error: true,
            //         message: 'Cannot be Empty'
            //     }
            // }
            // return {error: false, message: ''}  // returns ends the function, will not go to default
        // case 'lastname':
        //     if (value === "Last") {
        //         return {error: true, message: 'Cannot be Last'}
        //     }
        //     if (value.includes(' ')){
        //             return {error: true, message: 'Cannot use empty spaces'}
        //         }
            // let caseObj = {error: false, message: ''}
            // if (value === 'Janet') {
            //     caseObj =  {error: true, message: 'Cannot be Janet'}
            // }
            // if (value === '') {
            //         caseObj = {error: true, message: 'Cannot be Empty'}
            //     }
            // return caseObj
        case "email":

            // if(!value.includes('@') || !value.includes('.')) {
            //     return {error: true, message: 'Not a valid email'}
            // }

            // ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
            let emailRegExp = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
            if (!emailRegExp.test(value)) {
                return {error: true, message: 'Not a valid email'}
            }

            if (value.includes(' ')){
                return {error: true, message: 'Cannot use empty spaces'}
            }
            if (value === ''){
                return {
                    error: true,
                    message: 'Cannot be Empty'
                }
            };

            return {error: false, message: ''}
        case "password":
            // ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$


            if (value.includes(' ')){
                return {error: true, message: 'Cannot use empty spaces'}
            }
            if (value === ''){
                return {
                    error: true,
                    message: 'Cannot be Empty'
                }
            };
            return {error: false, message: ''}
        default:  //applies to all
            if (value.includes(' ')){
                return {error: true, message: 'Cannot use empty spaces'}
            }
            if (value === ''){
                return {
                    error: true,
                    message: 'Cannot be Empty'
                }
            };
            return {error: false, message: ''}
    }
}

export const validateObj = params => {
    console.log(params)
    let returnObj = {}
    for (const key in params) {  // first loop, key = firstname
        const element = params[key]  // params[firstname]: {error: false, message: ''} | element = {error: false, message: ''}
        //checker is a function that takes in the key value pair as arguments
        // and then returns the modified object
        returnObj = {
            ...returnObj,
            [key]: checker(key, element)
        }
    }
    return returnObj
    // {
    //     firstname: {error: false, message: ''},
    //     lastname: {error: false, message: ''},
    //     email: {error: false, message: ''},
    //     password: {error: false, message: ''}
    //  }
}