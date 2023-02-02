export default {
    setFoundMac (state: any, payload: any | any[]) {
        state.foundMacAddress = payload
        state.wasMacInfoUpdated = true
    },
    setCloseFoundMac (state: any) {
        state.foundMacAddress = null
        state.wasMacInfoUpdated = false
    },
    setIpAddress (state: any, payload: any) {
        state.ipAddress = payload
    }
}