export default {
    /**
     * @desciption    Get user's MAC-address info.
     * @param         context 
     * @param         payload A string which represents the required MAC-address (must consist of 17 symbols)
     */
    async asyncSearchMAC(context: any, payload: string) {
        if(payload.length === 17) {
            try {
                const response = await fetch(`http://localhost:4440/api/mac/${payload}`, {
                    method: "GET"
                })

                const data = await response.json()
                
                if(response.ok) {
                    context.commit("setFoundMac", data)
                }
                if(!response.ok) {
                    throw Error(data.error || data)
                }
            } catch (error: any) {
                throw Error(error.message || error.toString(0))
            }
        } else {
            throw Error("Please notice that your MAC-address must be correct. If you have troubles, please visit our 'Information' page.")
        }
    },

    /**
     * @description    Get user's IP-address and following information.
     * @param          context 
     */
    async getIp(context: any) {
        try {
            const response = await fetch("http://localhost:4440/api/ip", { method: "GET" })
            const data = await response.json()

            if(response.ok) {
                context.commit("setIpAddress", data)
            }
            if(!response.ok) {
                throw Error(data.error || data)
            }
        } catch (error: any) {
            throw Error(error.message || error.toString())
        }
    }
}