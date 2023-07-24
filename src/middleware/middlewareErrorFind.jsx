
export const ErrorMessage =async (res, statuscode = 500, message= 'internal server error' ) => {
    return res.status(statuscode).json({success:false, message});
}


export const MiddleWareError = (middleFetch) => (req, res) => {
    return Promise.resolve(middleFetch(req, res)).catch((error) => {
        return ErrorMessage(res, 400, error.message)
    })
}