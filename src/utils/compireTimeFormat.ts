export const compireTimeFormat = (data):number => {
    const serverTime = data.zones[0].timestamp * 1000;
    const localTime = new Date().getTime();
    const localOffset = new Date().getTimezoneOffset() * 60 * 1000; // Получаем смещение от UTC в миллисекундах
    return  serverTime - localTime + localOffset; // Учитываем смещение от UTC
}