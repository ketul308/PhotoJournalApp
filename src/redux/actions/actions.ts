
enum actions {
    APIDATA = "APIDATA"
}

const setApiData = (data?: any) => ({
    type: actions.APIDATA,
    payload: data
})
