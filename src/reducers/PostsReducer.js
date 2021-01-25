export default (state, action) => {
    switch (action.type) {

      case "FETCH_POSTS":
        return {
          ...state,
          posts:action.payload.posts,
          fetching:false,
          loading:false
         
        };

      case "CREATE_POST":
        return {
          ...state,
          posts:[action.payload.post,...state.posts],
          fetching:false,
          loading:false
         
        };

      case "UPDATE_POST":
        return {
          ...state,
          posts:state.posts.map(post=>post.id === action.payload.post.id ? action.payload.post : post ),
          fetching:false,
          loading:false
         
        };

      case "DELETE_POST":
        return {
          ...state,
          posts:state.posts.filter(post=>post.id != action.payload.postId ),
          fetching:false,
          loading:false
         
        };

      case "SET_LOADING_TRUE":
        return {
          ...state,
          loading:true
         
        };

        
  
      default:
        return state;
    }
  };
  