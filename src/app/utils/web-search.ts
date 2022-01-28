import { Linking } from "react-native"

export default function webSearch(text: string) {
  Linking.openURL(`https://www.google.com/search?q=${text}`)
    .then(res => {
      console.tron.log(res)
    })
    .catch(error => {
      console.tron.log(error)
    })
}
