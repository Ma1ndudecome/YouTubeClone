
export function makeParams(params, change){
    for(const key in change){
        params[key] = change[key]
    }
    return params
}
