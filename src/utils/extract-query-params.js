// ?search=Jeferson => ['search=Jeferson', 'page=2'] => {['search', 'Jeferson'], ['page', '3']}

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=')

    queryParams[key] = value

    return queryParams
  }, {})
}