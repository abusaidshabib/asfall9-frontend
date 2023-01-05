import { useEffect } from "react"

const useTitle = title =>{
  useEffect(() =>{
    document.title = `${title}-Asfall9`;
  }, [title])
}

export default useTitle;