export const getUrlParam = (name: string, queryString?: string) => {
    const urlParams = new URLSearchParams(queryString ?? window.location.search)
    return urlParams.get(name)
}
