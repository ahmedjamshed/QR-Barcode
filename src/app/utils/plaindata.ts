export default function plainData(data: any): any {
  return JSON.parse(JSON.stringify(data))
}
