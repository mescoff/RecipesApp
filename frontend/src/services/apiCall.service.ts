import axios from 'axios';
import React from 'react';

 class ApiService extends React.Component{

    static Get = (apiEndpoint:string, route:string='') => {
        const req = `${apiEndpoint}${route}`;
        console.log('requesting Get');
        axios.get(req)
        .then(res => (
            console.log('Api call result', res.data)
        ))
    }
}

export default ApiService;