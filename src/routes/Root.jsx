import React from 'react'
import {Outlet} from 'react-router-dom'
const Root = () => {
  return (
        <> {/* equivalent to <React.Fragment>*/}
            <Outlet />
        </>
    )
}

export default Root