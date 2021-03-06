
import {Types} from './ActionType';

export const fetchPosts = () => {
    return {
        type: Types.FETCH_POST,
        typeSucces: Types.FETCH_POST_SUCCESFUL,
        typeFail: Types.FETCH_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts`,
        method: 'GET',
    };
};

export const deletePosts = id => {
    return {
        type: Types.DELETE_POST,
        typeSucces: Types.DELETE_POST_SUCCESFUL,
        typeFail: Types.DELETE_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts/${id}`,
        method: 'DELETE',
        reduxData: {id}
    };
};

export const deletePostAndFetch = (id, Filters)=>{
    return dispatch =>{
        dispatch(deletePosts(id)).then(response =>{
            if (response.status === 200){
                dispatch(fetchPosts(Filters));
            }
        });
    };
};

export const editPost = postObject => {
    return {
        type: Types.EDIT_POST,
        typeSucces: Types.EDIT_POST_SUCCESFUL,
        typeFail: Types.EDIT_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts/${postObject.id}`,
        method: 'PATCH',
        data: postObject,
    };
};

export const editPostAndFetch = (postObject, Filters)=>{
    return dispatch =>{
        dispatch(editPost(postObject)).then(response=>{
            if (response.status === 200){
                dispatch(fetchPosts(Filters));
            }
        });
    };
};


export const savePost = postObject => {
    return {
        type: Types.SAVE_POST,
        typeSucces: Types.SAVE_POST_SUCCESFUL,
        typeFail: Types.SAVE_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts`,
        method: 'POST',
        data: postObject,
    };
};

export const savePostAndFetch = (postObject, filters) =>{
    return dispatch=>{
        dispatch(savePost(postObject)).then(response=>{
            if(response.status === 201){
                dispatch(fetchPosts(filters));
            }
        });
    };
};