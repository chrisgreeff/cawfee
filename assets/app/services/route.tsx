import { clone, forEach } from 'lodash'

class RouteService {
  get (route: string, urlParams?: any) {
    let newRoute = clone(route)

    forEach(urlParams, (urlParam: string, key: string) => {
      newRoute = newRoute.replace(`:${key}`, urlParam)
    })

    return newRoute
  }
}

export default new RouteService()
