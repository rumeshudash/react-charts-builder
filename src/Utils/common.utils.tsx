export const IsArray = ( data: any ) => {
    if( ! data ) {
        return false;
    }
    return Array.isArray(data);
}

export const toSelectOptions = ( values: any[] ) => {
    return values.map( item => ({ label: item, value: item }))
}

export const getOptionFromValue = ( options: any[], value: string ) => {
    const currentValue = options.filter( option => option.value === value );
    if( currentValue.length > 0 ) {
        return currentValue[0];
    }
    return null;
}

export const isEmptyObject = ( obj: object ) => {
    if( obj ) {
        for (var _ in obj) return false;
    }
    return true;
}

export const isFunction = ( item: any ) => {
    return item && typeof item === 'function';
}

export const hasObjectKey = ( object: any, key: string ) => {
    return typeof object === 'object' && object.hasOwnProperty(key);
}