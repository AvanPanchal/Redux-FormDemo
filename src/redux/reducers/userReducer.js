const userReducer = (userData = [], action) => {

    switch (action.type) {
        case 'ADDUSER':
            return userData;
    }
}