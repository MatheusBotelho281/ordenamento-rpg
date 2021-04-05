import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

export const TokenContext = createContext({})


export function TokenProvider({ children }) {
  const router = useRouter()
  const LocalToken = Cookies.get('@TOKEN')
  const [Token, setToken] = useState(LocalToken)

  useEffect(() => {
    if (!Token) {
      router.push('/login')
    }
  }, [Token])

  const HandleTokenSave = (token) => {
    setToken(token)
    Cookies.set('@TOKEN', String(token))
  }
  const Logout = () => {
    setToken(null)
    Cookies.remove('@TOKEN')
  }

  return (
    <TokenContext.Provider value={{
      Token,
      HandleTokenSave,
      Logout
    }}>
      {children}
    </TokenContext.Provider>
  )
}