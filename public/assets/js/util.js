const Util = (function() {
    const fetchApi = async (url, options = {}, callbackSuccess, callbackError) => {
        console.log('call api: ', url)
        try {
            const response = await fetch(url, options)
            callbackSuccess(await response.json())
        } catch(err) {
            callbackError(callbackError(err))
        }
    }
    return {
        fetch: fetchApi
    }
})()