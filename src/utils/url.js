import { navigate } from "gatsby"

const gotoPage = async (url, show = false) => {
  
  await navigate(url)
}

export {
  gotoPage,
}