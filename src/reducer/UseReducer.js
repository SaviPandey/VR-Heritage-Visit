//  export const initialState = null;

//  export const reducer = (state , action) => {
//      if(action.type === "USER"){
//          return action.payload;
//      }
//      return state;
// }



// export const initialState = {
//     user: null,
//     isMeetingScheduled: null,
// };

// export const actionTypes = {
//     USER: "USER",
//     SCHEDULE_MEETING: "SCHEDULE_MEETING",
// };

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case actionTypes.USER:
//             return { ...state, user: action.payload };
//         case actionTypes.SCHEDULE_MEETING:
//             return { ...state, isMeetingScheduled: action.payload };
//         default:
//             return state;
//     }
// };

export const initialState = {
    // user: null,
    // currentUser:null,
    // loading: false,
    // meetingScheduled: false,
    // location: {lng:80 , lat:25},
    // images:[],
    // details: { title: '', description: '', price: 0 },
    // alert: { open: false, severity: 'info', message: '' },
  currentUser: null,
  user: null,
  meetingScheduled: false,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: 'info', message: '' },
  profile: { open: false, file: null, photoURL: '' },
  images: [],
  details: { title: '', description: '', price: 0 },
  location: { lng: 80, lat: 25 },
  pilgrims: [],
  priceFilter: 50,
  addressFilter: null,
  filteredPilgrims: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "USER":
        return { ...state, user: action.payload };
      case "SCHEDULE_MEETING":
        return { ...state, meetingScheduled: true };
      case "Update_location":
        return {...state, location: action.payload};
      case 'UPDATE_IMAGES':
        return { ...state, images: [...state.images, action.payload] };
      case 'UPDATE_ALERT':
        return { ...state, alert: action.payload };
      case 'DELETE_IMAGE':
        return {
          ...state,
          images: state.images.filter((image) => image !== action.payload),
        };
      case 'UPDATE_DETAILS':
        return { ...state, details: { ...state.details, ...action.payload } };
      case 'UPDATE_ALERT':
        return { ...state, alert: action.payload };
      case 'UPDATE_USER':
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
        return { ...state, currentUser: action.payload };
      case 'UPDATE_PROFILE':
        return { ...state, profile: action.payload };
      case 'START_LOADING':
        return { ...state, loading: true };
      case 'END_LOADING':
        return { ...state, loading: false };
      case 'RESET_ROOM':
        return {
          ...state,
          images: [],
          details: { title: '', description: '', price: 0 },
          location: { lng: 80, lat: 25 },
        };
      case 'OPEN_LOGIN':
        return { ...state, openLogin: true };
      case 'CLOSE_LOGIN':
        return { ...state, openLogin: false };
      // case 'UPDATE_PILGRIMS':
      //   return{ ...state,pilgrims:action.payload}
      case 'UPDATE_PILGRIMS':
        return {
          ...state,
          pilgrims: action.payload,
          addressFilter: null,
          priceFilter: 50,
          filteredPilgrims: action.payload,
        };
      case 'FILTER_PRICE':
        return {
          ...state,
          priceFilter: action.payload,
          filteredPilgrims: applyFilter(
            state.pilgrims,
            state.addressFilter,
            action.payload
          ),
        };
      case 'FILTER_ADDRESS':
        return {
          ...state,
          addressFilter: action.payload,
          filteredPilgrims: applyFilter(
            state.pilgrims,
            action.payload,
            state.priceFilter
          ),
        };
      case 'CLEAR_ADDRESS':
        return {
          ...state,
          addressFilter: null,
          priceFilter: 50,
          filteredPilgrims: state.pilgrims,
        };

        case 'UPDATE_PILGRIM':
          return { ...state, pilgrim: action.payload };
  
      default:
        return state;
    }
  };
  

  const applyFilter = (pilgrims, address, price) => {
    let filteredPilgrims = pilgrims;
    if (address) {
      const { lng, lat } = address;
      filteredPilgrims = filteredPilgrims.filter((pilgrim) => {
        const lngDifference = Math.abs(lng - pilgrim.lng);
        const latDifference = Math.abs(lat - pilgrim.lat);
        return lngDifference <= 1 && latDifference <= 1;
      });
    }
  
    if (price < 50) {
      filteredPilgrims= filteredPilgrims.filter((pilgrim) => pilgrim.price <= price);
    }
  
    return filteredPilgrims;
  };