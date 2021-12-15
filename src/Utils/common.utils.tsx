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

export const getObjectFromArray = ( array: any[], key: string, value: any ) => {
    return array.find( object => object[key] === value );
}

export const mergeLeftObjects = ( obj1: object, obj2: object ): object => {
    let newObj = {};
    for( let key in obj1 ) {
        newObj[key] = typeof obj2[key] === 'undefined' ? obj1[key] : obj2[key];
    }
    return newObj;
}