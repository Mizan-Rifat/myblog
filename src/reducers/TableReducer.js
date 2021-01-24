export default (state, action) => {
    switch (action.type) {

      case "SORT_DATA":
        return {
          ...state,
          currentData:state.currentData.sort((a,b)=>{

            if(action.payload.order == 'dsc'){
              if(a[action.payload.column] < b[action.payload.column] ) {
                return 1;
              }
              if(a[action.payload.column] > b[action.payload.column] ) {
                return -1;
              }
    
              return 0;
            }
    
            if(action.payload.order == 'asc'){
              if(a[action.payload.column] > b[action.payload.column] ) {
                return 1;
              }
              if(a[action.payload.column] < b[action.payload.column] ) {
                return -1;
              }
    
              return 0;
            }
    
          }),
        };

      case "FILTER_DATA":
        return {
          ...state,
          currentData:state.allData.filter(user=>
            user.name.toLowerCase().includes(action.payload.query) || 
            user.email.toLowerCase().includes(action.payload.query) || 
            user.website.toLowerCase().includes(action.payload.query)
          )
        };

      case "PAGINATE_DATA":
        return {
          ...state,
          currentData:state.allData.slice(action.payload.start,action.payload.end)
        };
        
  
      default:
        return state;
    }
  };
  