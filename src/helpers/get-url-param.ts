export const getUrlParam = (name: string) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(name)
}
