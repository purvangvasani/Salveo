import React, { Suspense, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

import { UserContext } from '../App';

const AppContent = () => {
  const { user } = useContext(UserContext);

  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          {Object.keys(user).length === 0 ?
            <Route path="/" element={<Navigate to="login" replace />} />
          :
            <Route path="/" element={<Navigate to="home" replace />} />
          }
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
