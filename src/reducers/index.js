export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const FORM_CHANGE = "FORM_CHANGE";
export const RESET_FORM = "RESET_FORM";
const uuidv4 = require("uuid/v4");

const initialState = {
  item: {
    id: uuidv4(),
    name: "",
    description: "",
    availability: true,
    rentalPrice: {
      hourlyRate: Number,
      dailyRate: Number
    },
    condition: "",
    location: "",
    imgs: []
  },
  isloading: false,
  data: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return {
        ...state,
        isloading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        data: action.payload
      };
    case DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        data: action.payload
      };
    case FORM_CHANGE:
      return {
        ...state,
        item: {
          ...state.item,
          [action.name]: action.value
        }
      };
    case "RATE_CHANGE":
      return {
        ...state,
        item: {
          ...state.item,
          rentalPrice: {
            ...state.item.rentalPrice,
            [action.name]: action.value
          }
        }
      };

    case RESET_FORM: {
      return {
        ...state,
        item: {
          id: uuidv4(),
          name: "",
          description: "",
          availability: true,
          rentalPrice: {
            hourlyRate: 0,
            dailyRate: 0
          },
          condition: "",
          location: "",
          imgs: []
        }
      };
    }

    default:
      return state;
  }
};
