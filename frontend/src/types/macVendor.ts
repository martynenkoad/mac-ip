interface MacVendor {
    vendorDetails: {
        oui: string | number,
        isPrivate: boolean | string,
        companyName: string,
        companyAddress?: string,
        countryCode?: string
    },
    blockDetails: {
        blockFound?: boolean | string,
        borderLeft?: string | number,
        borderRight?: string,
        blockSize?: number | string,
        assignmentBlockSize?: string,
        dateCreated: string,
        dateUpdated: string
    },
    macAddressDetails: {
        searchTerm?: string,
        isValid?: boolean | string
        transmissionType?: string,
        administrationType?: string
    }
}

export default MacVendor