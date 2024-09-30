export const getUrlParam = (name: string, queryString?: string | null) => {
    const urlParams = new URLSearchParams(queryString ?? window.location.search)
    return urlParams.get(name)
}
