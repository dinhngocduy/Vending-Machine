function isNumeric(value:any) {
    // return /^\d+$/.test(value);

    return /^\+?(0|[1-9]\d*)$/.test(value);

    // return typeof value === 'number' && isFinite(value);

}

export default isNumeric;