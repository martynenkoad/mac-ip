interface Ip {
    "ip_address": string | number,
    "city": string,
    "city_geoname_id": number | string,
    "region": string,
    "region_iso_code": string,
    "region_geoname_id": number | string,
    "postal_code": string | number,
    "country": string,
    "country_code": string,
    "country_geoname_id": string | number,
    "country_is_eu": boolean,
    "continent": string,
    "continent_code": string,
    "continent_geoname_id": string | number,
    "longitude": number,
    "latitude": number,
    "security"?: {
        "current_time": string | number,
        "is_dst": boolean
    },
    "flag"?: {
        "emoji": string,
        "unicode": string,
        "png": string,
        "svg": string
    },
    "currency"?: {
        "currency_name": string,
        "currency_code": string
    },
    "connection"?: {
        "autonomous_system_number": number | string,
        "autonomous_system_organization": string,
        "connection_type": string,
        "isp_name": string,
    }
}

export default Ip