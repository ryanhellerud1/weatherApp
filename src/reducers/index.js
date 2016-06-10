
import {combineReducers} from 'Redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});
export default rootReducer;