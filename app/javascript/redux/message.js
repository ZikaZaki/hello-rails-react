import axios from "axios";

const MESSAGE_LOADING = "MESSAGE_LOADING";
const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
const MESSAGE_ERROR = "MESSAGE_ERROR";

const initialState = {
    loading: false,
    greeting: null,
    error: "",
};

const messageReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MESSAGE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                greeting: payload,
                error: "",
            };
        case MESSAGE_ERROR:
            return {
                ...state,
                loading: false,
                greeting: null,
                error: payload,
            };
        default:
            return state;
    }
};

export const fetchData = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        dispatch({ type: MESSAGE_LOADING });
        const { data } = await axios.get("http://127.0.0.1:3000/api/messages/", config);
        // Should convert data to JSON before dispatching data['message']
        dispatch({ type: MESSAGE_SUCCESS, payload:  data['message'] });
    } catch (error) {
        dispatch({ type: MESSAGE_ERROR, payload: error.message });
    }
};

export default messageReducer;
