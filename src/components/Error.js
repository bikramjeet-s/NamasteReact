import {useRouteError} from 'react-router-dom';

const Error = () =>{
    const err = useRouteError();// returns a JS-Object with information of the nearest Ancestor Route Error so as to provide the information about the error to the user.

    return (
        <div>
            <h1>Error !!!!!</h1>
            <h1>Sorry mate! You are not to tread these pages</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;