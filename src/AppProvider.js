import React, { useState } from 'react'

import { AppContext } from './contexts'

const AppProvider = ({ children }) => {
  const [cartShown, setCartShown] = useState(false)

  const AppContextValue = {
    cartShown,
    setCartShown,
  }

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider