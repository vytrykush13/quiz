export const setFirstLetterBig = (value: string) => {
    if (value.length === 0) {
        return value;
    }
    
    return value.charAt(0).toUpperCase() + value.slice(1);
}