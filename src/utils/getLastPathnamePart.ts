export const getLastPathnamePart = (pathname : string): string => {
    const pathnameParts = pathname.split('/')

    return  pathnameParts[pathnameParts.length - 1]
}
