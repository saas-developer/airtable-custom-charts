import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBusy } from './app/actionsApp';

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBusy());
    })
    return (
        <div>This is our App</div>
    )
}
