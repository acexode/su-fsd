import { Item } from "./definitions"

export const handleSortFilenameAsc =(items: Item[]):Item[] => {
    return [...items].sort((a, b) => {
        return a.fileName.localeCompare(b.fileName, undefined, {numeric: true, sensitivity: 'base'})
    })
}
export const handleSortFilenameDesc =(items: Item[]):Item[] => {
    return [...items].sort((a, b) => {
        return b.fileName.localeCompare(a.fileName, undefined, {numeric: true, sensitivity: 'base'})
    })
}
export const handleSortCreatedAt =(items: Item[]):Item[] => {
    return [...items].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}
export const handleSort =(sortMethod: string, items: Item[]): Item[] => {
    if(sortMethod === 'createdAtAsc'){
        return handleSortCreatedAt(items)
    } else if(sortMethod === 'filenameAsc'){
        return handleSortFilenameAsc(items)
    }     else if(sortMethod === 'filenameDesc'){
        return handleSortFilenameDesc(items)
    }
    return items
}
