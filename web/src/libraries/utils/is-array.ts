function isArray(value: any){
    return value && typeof value === 'object' && value.constructor === Array
}

export default isArray;