import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/message";

const Greeting = () => {
    const { greeting, loading, error } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : ( greeting ? (
                    <h1>Random Greeting: {greeting}</h1>
                ) : (
                    <h1>{error}</h1>
                ))
            }
        </div>
    );
};

export default Greeting;