const PRIMARY_SCREENS = {
  SPLASH: "splash",
  LAUNCH: "launch",
}

const SECONDARY_SCREENS = {
  HISTORY: "history",
  SCAN: "scan",
  GENERATE: "generate",
  RESULT: "result",
  SAVED_RESULT: "savedResult",
}

const ROOT_SCREENS = {
  PRIMARY: "primary",
  MODAL: "modal",
}

const MODAL_TYPE = {
  ADD: "add",
  SAVE: "save",
  BACK: "back",
  DELETE: "delete",
}

const ITEM = {
  BARCODE: "barcode",
  QRCODE: "qrcode",
}

const VALUES = {
  barcode: "Bar Code",
  qrcode: "QR Code",
}

const HISTORY = {
  SCANNED: "scanned",
  GENERATED: "generated",
}

const ROUTE = {
  key: "key",
  title: "title",
}

type ROUTE_TYPE = typeof ROUTE

const NAV = {
  TYPE: "type",
  BACK: "back",
}

type NAV_TYPE = typeof NAV

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"
const SCANNED_STORAGE_KEY = "scanned"
const GENERATED_STORAGE_KEY = "generated"

export {
  PRIMARY_SCREENS,
  SECONDARY_SCREENS,
  ROOT_SCREENS,
  MODAL_TYPE,
  ITEM,
  VALUES,
  HISTORY,
  ROUTE,
  ROUTE_TYPE,
  NAV,
  NAV_TYPE,
  ROOT_STATE_STORAGE_KEY,
  SCANNED_STORAGE_KEY,
  GENERATED_STORAGE_KEY,
}
