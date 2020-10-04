export const getSpaceX = {
    request: (spaceXData) => {
        return {
            type: 'GET_SPACEX.REQUEST',
            payload: {
                spaceXData
            }
        }
    },
    success: (spaces) => {
        return {
            type: 'GET_SPACEX.SUCCESS',
            payload: {
                spaces
            }
        }
    },
    failure: (error) => {
        return {
            type: 'GET_SPACEX.FAILURE',
            payload: {
                error
            }
        }
    }
};