export default (state, action) => {
    switch (action.type) {

      case "SET_POST":
        return {
          ...state,
          post:action.payload.post,
          comments:action.payload.comments,
          loading:false,
          fetching:false,
         
        };

      case "SET_COMMENTS":
        return {
          ...state,
         
        };

        
  
      default:
        return state;
    }
  };
  