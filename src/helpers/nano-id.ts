export const nanoId = (params: (string | number)[], length: number) => {
    const date = new Date()
    let characters = (date).toString()
    params.map(param => { characters += `${param}${date.getTime()}` })
    characters = characters.replaceAll(' ', '')
    const charactersLength = characters.length
    let result = '', counter = 0
    while(counter < length){
        let char = characters.charAt(Math.floor(Math.random() * charactersLength))
        if((Math.random() * 2) % 2 === 0){
            char = char.toUpperCase()
        }
        result += char
        counter += 1
    }
    return result
}
