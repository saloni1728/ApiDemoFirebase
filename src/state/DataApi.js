const initalData = {
    chainId: 4,
    username: "",
    mobileNumber: "",
    email: "",
    customUrl: "",
    userAddress: "",
    bio: "",
    profilePic: "",
    country: "",
    countrySymbol: "",
    countryCode: ""
}

const initialState = {
    status: '',
    payload: initalData
}

export const DataApi = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_SUCCESS':
            return { ...state, status: "POSTING SUCCESS..", payload: action.data };
        case 'POST_SUCCESS':
            const ans = action.data;
            console.log(ans);
            return { ...state, status: "FETCHING SUCCESS..", payload: action.data };
        case 'POST_FAILURE':
            return { ...state, status: "POSTING FAILURE..", payload: initalData };
        case 'FETCH_FAILURE':
            return { ...state, status: "FETCHING FAILURE..", payload: initalData };
        default:
            return { ...state }
    }
}

