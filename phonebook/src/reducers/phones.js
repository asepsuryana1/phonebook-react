const phones = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_PHONE_SUCCESS':
      return action.phones.map((item)=>{
        item.sent = true;
        return item
      })
  
      case 'POST_PHONE':
      return [
        ...state,
        {
          id: action.id,
          nama: action.nama,
          phone: action.phone,
          sent: true
        }
      ]
  
      case 'POST_PHONE_SUCCESS':
      return action.phones.map((item)=>{
        item.sent = true;
        return item
      })
  
      case 'POST_PHONE_FAILURE':
      return state.map((item)=>{
        if(item.id === action.id){
          item.sent = false;
        }
        return item
      })
  
      case 'DELETE_PHONE':
      return state.filter((item) => item.id !== action.id)
  
      case 'DELETE_PHONE_SUCCESS':
      return state
  
      case 'LOAD_PHONE_FAILURE':
      case 'DELETE_PHONE_FAILURE':
      default:
      return state
    }
  }
  
  export default phones