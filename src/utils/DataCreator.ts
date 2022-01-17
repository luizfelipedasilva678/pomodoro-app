export default class DataCreator {
  static getDate(second: number): string {
    const data = new Date(second * 1000);

    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'GMT',
    });
  }
}
