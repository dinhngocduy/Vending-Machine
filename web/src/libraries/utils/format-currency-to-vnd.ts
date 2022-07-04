const formatCurrencyToVnd = (value:number) => {
    if(value <= 0) return "0 VND";

    return value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

export default formatCurrencyToVnd;