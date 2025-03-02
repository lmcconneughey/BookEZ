export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(), ...item//<< added id with _id's value!
        }
    }).map(({_id, ...rest}) => rest);//<< removed _id key/val, returning everything else
    return mappedArray;
}

export const replaceMongoIdInObject = (obj) => {
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
    //^^^ removed _id from Obj ^^^ added id: obj._id.toString() tp Obj
//first we get the object, open it up, add id: obj._id.toString()
//then upon assignment we remove the origional _id
    return updatedObj
}