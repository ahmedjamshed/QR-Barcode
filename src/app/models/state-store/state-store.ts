import { Instance, types, flow } from "mobx-state-tree"
import UUID from "react-native-uuid-generator"
import { ITEM, HISTORY, SCANNED_STORAGE_KEY, GENERATED_STORAGE_KEY } from "../../constants"
import { Toast } from "../../components"
import * as storage from "../../utils/storage"
import plainData from "../../utils/plaindata"

export const HistoryModel = types.model("History").props({
  id: types.identifier,
  date: types.maybe(types.string),
  text: types.optional(types.string, ""),
  base64: types.optional(types.string, ""),
  type: types.optional(types.enumeration([ITEM.BARCODE, ITEM.QRCODE]), ITEM.QRCODE),
})

export interface HistoryType extends Instance<typeof HistoryModel> {}

/**
 * A StateStore model.
 */
export const StateStoreModel = types
  .model("StateStore")
  .props({
    historyType: types.optional(
      types.enumeration([HISTORY.SCANNED, HISTORY.GENERATED]),
      HISTORY.SCANNED,
    ),
    scanned: types.optional(types.array(HistoryModel), []),
    generated: types.optional(types.array(HistoryModel), []),
    savedResult: types.maybeNull(types.reference(HistoryModel)),
    result: types.maybeNull(HistoryModel),
    saved: types.optional(types.boolean, false),
  })
  .views(self => ({
    get history() {
      return self.historyType === HISTORY.SCANNED ? self.scanned : self.generated
    },
  }))
  .actions(self => {
    const setHistoryType = (type: string) => {
      self.historyType = type
    }

    const getHistory = flow(function*() {
      const scanned = (yield storage.load(SCANNED_STORAGE_KEY)) || []

      const generated = (yield storage.load(GENERATED_STORAGE_KEY)) || []

      self.scanned = plainData(scanned)

      self.generated = plainData(generated)

      // console.tron.log(self.scanned, self.generated)
    })

    const clearResults = () => {
      self.savedResult = null

      self.result = null
    }

    const setSavedResult = (id: string) => {
      self.savedResult = id as any
    }

    const deleteSavedResult = flow(function*() {
      const id = self.savedResult.id

      clearResults()

      if (self.historyType === HISTORY.SCANNED) {
        const history = self.scanned.filter(f => f.id !== id)
        self.scanned = plainData(history)
        Toast.show("Successfully Deleted!")
        yield storage.save(SCANNED_STORAGE_KEY, history)
      } else {
        const history = self.generated.filter(f => f.id !== id)
        self.generated = plainData(history)
        Toast.show("Successfully Deleted!")
        yield storage.save(GENERATED_STORAGE_KEY, history)
      }

      // console.tron.log(self.scanned, self.generated)
    })

    const setResult = ({
      type,
      text = "",
      base64 = "",
    }: {
      text?: string
      type?: string
      base64?: string
    }) => {
      self.result = {
        type,
        text,
        base64,
        date: undefined,
        id: `_result`,
      }

      self.saved = false
    }

    const saveResult = flow(function*(type: string) {
      self.result.date = new Date().toDateString()
      self.saved = true
      const uuid = yield UUID.getRandomUUID()
      Toast.show("Successfully Saved!")

      if (type === HISTORY.SCANNED) {
        let history = (yield storage.load(SCANNED_STORAGE_KEY)) || []
        history = [{ ...self.result, id: `${uuid}_scanned` }, ...self.scanned.toJSON()]
        self.scanned = plainData(history)
        yield storage.save(SCANNED_STORAGE_KEY, history)
      } else {
        let history = (yield storage.load(GENERATED_STORAGE_KEY)) || []
        history = [{ ...self.result, id: `${uuid}_generated` }, ...self.generated.toJSON()]
        self.generated = plainData(history)
        yield storage.save(GENERATED_STORAGE_KEY, history)
      }

      // console.tron.log(self.scanned, self.generated)
    })

    return {
      setHistoryType,
      getHistory,
      clearResults,
      setSavedResult,
      deleteSavedResult,
      setResult,
      saveResult,
    }
  })

/**
 * The StateStore instance.
 */
export interface StateStore extends Instance<typeof StateStoreModel> {}
