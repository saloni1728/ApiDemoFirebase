const initialState = {
    urlbase64: ""
}

export const ProfilePic = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILEPIC':
            return { ...state, urlbase64:action.url };
        default:
            return { ...state }
    }
}
