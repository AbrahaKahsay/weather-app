// Actions
const CITIES_FETCHED = 'ROCKETS_FETCHED';

// get rockets from server
const url = `https://api.openweathermap.org/data/2.5/weather?q=jimma&appid=6ba82cfd5a63c82e9583996928fd44ff`;
const fetchCitiesFromServer = async (dispatch) => {
  const data = await fetch(url);
  const cities = await data.json();
  dispatch(fetchCities(cities.map((city) => ({
    id: city.id,
    name: city.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
  }))));
};

// Actions creators
const fetchCities = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

// const reserveRocket = (id) => ({
//   type: ROCKETS_RESERVED,
//   id,
// });

// const cancelRocket = (id) => ({
//   type: ROCKETS_CANCELLED,
//   id,
// });


const initialState = [];
let newState;

// Reducers
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return action.payload;
    case ROCKETS_RESERVED:
      newState = state.map((rock) => {
        if(rock.id !==action.id){
          return rock;
        }
        else {
          return {...rock, reserved:true};
        }
      })
      return newState;
      case ROCKETS_CANCELLED:
        newState = state.map((rock) => {
          if (rock.id !== action.id) return rock;
          return { ...rock, reserved: false };
        });
        return newState;
    default:
      return state;
  }
};
export { fetchRocketsFromServer, reserveRocket, cancelRocket };
export default rocketsReducer;