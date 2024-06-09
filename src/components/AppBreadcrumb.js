import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation().pathname
  const searchParams = useLocation();
  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          search: searchParams.search !== '' ? searchParams.search : null,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  const handleRouteChange = (route) => {
    let routeObj = {
      pathname: route.pathname,
    }
    if(route.search !== ''){
      routeObj['search'] = route.search
    }
    navigate(routeObj)
  }

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>&nbsp;/&nbsp;
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <div key={index}>
            <span className={breadcrumb.active ? '' : 'pointer text-dec-underline'}>
              {breadcrumb.name}
            </span>
            {index < breadcrumbs.length - 1 && <span>&nbsp;/&nbsp;</span> }
          </div>
        )
        // onClick={()=>handleRouteChange(breadcrumb)}
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
