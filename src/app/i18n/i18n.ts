// import * as RNLocalize from "react-native-localize"
import i18n from "i18n-js"

const en = require("./en")
const ur = require("./ur")

i18n.fallbacks = true
i18n.translations = { en, ur }

const fallback = { languageTag: "en", isRTL: false }
const { languageTag } = fallback
  // RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback
i18n.locale = languageTag
