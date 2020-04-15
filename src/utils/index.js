import dayjs from "dayjs"

const isBrowser = () => typeof window !== 'undefined'

const parseChineseDate = date => dayjs(date).format('DD/MM/YYYY')

export {
  isBrowser,
  parseChineseDate,
}