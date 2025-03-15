export function createParams(
    typePart, 
    apikey, 
    idVideo, 
    videoId, 
    maxResults, 
    CommentToken,
    type,
    name,
){
    const dataObj = [
        {part:typePart}, 
        {key:apikey}, 
        {id:idVideo},
        {videoId:videoId},
        {maxResults:maxResults},
        {pageToken:CommentToken},
        {type:type},
        {q:name},
    ].filter(({part,key,id,videoIdm,maxResults,pageToken,type,q})=>{
        
    })
    const parameters = {
        params:{

        }
    }
    return parameters.params
}
createParams()