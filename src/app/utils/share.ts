import Share from "react-native-share"

export default function share({ text, base64 }: { text?: string; base64?: string }) {
  Share.open({
    url: base64,
    message: text,
  })
    .then(res => {
      console.tron.log(res)
    })
    .catch(err => {
      err && console.tron.log(err)
    })
}
