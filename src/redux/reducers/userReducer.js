const userReducer = (userData = {}, action) => {

    switch (action.type) {
        case 'ADDUSER':
            let d = action.payload;
        default:
            return userData;
    }
}