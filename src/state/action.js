import axios from "axios"
const postSucccess = (data) => {
    return {
        type: 'POST_SUCCESS',
        data
    }
}

const postFailure = () => {
    return {
        type: 'POST_FAILURE',
    }
}

const getSucccess = (data) => {
    return {
        type: 'FETCH_SUCCESS',
        data
    }
}

const getFailure = () => {
    return {
        type: 'FETCH_FAILURE',
    }
}

export const Profileuri= (url) => {
    return {
        type: 'PROFILEPIC',
        url
    }
}

export const postData = (data) => {
    return async (dispatchAction) => {
        try {
            let result = await axios.post('https://plugxrapi.brugu.io/dev/v1/addUser',data, {
                headers: {
                    'content-Type': "application/json",
                    'apiKey': "xCNpcsufSi5yYvGVCncEx0HAw1LonW1JoFY",
                    'Authorization': "eyJhbGciOiJIUzI1NiJ9.MHhqNkY0OHViMzR2Zjg3Yg.4B6Cw_VnheVrQfngZVkU2yrHyLI2dPnJq4oEhgj7Xfo",
                },
            }
            );
            console.log(result);
            dispatchAction(postSucccess(data));
        }
        catch (ex) {
            dispatchAction(postFailure());
        }
    }
}

export const getData = (data) => {
    return async (dispatchAction) => {
        try {
            let result = await axios.post('https://plugxrapi.brugu.io/dev/v1/getUserByAddress',data, {
                headers: {
                    'content-Type': "application/json",
                    'apiKey': "xCNpcsufSi5yYvGVCncEx0HAw1LonW1JoFY",
                    'Authorization': "eyJhbGciOiJIUzI1NiJ9.MHhqNkY0OHViMzR2Zjg3Yg.4B6Cw_VnheVrQfngZVkU2yrHyLI2dPnJq4oEhgj7Xfo",
                },
            }
            );
            console.log(result.data.data.profilePic);
            var base64Icon = `data:image/png;base64,${result.data.data.profilePic}`;
            console.log(base64Icon);
            dispatchAction(getSucccess(data));
        }
        catch (ex) {
            dispatchAction(getFailure());
        }
    }
}

