export interface TimeZone {
    countryCode: string,
    countryName: string,
    gmtOffset: number,
    timestamp: number,
    zoneName: string
}

export interface fetchTimeResp {
    message: string,
    status: string
    zones:TimeZone[]
}

const URL = "https://api.timezonedb.com/v2.1/list-time-zone?key=MJVB8CFBYLXD&format=json&country=RU&zone=Europe/Moscow"

export const fetchTime = async ():Promise<fetchTimeResp> => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data
    } catch (error) {
        throw error
    }
}