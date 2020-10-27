import axios, { AxiosResponse } from 'axios';
import React from 'react';

//  class ApiService extends React.Component{

export const Get = (apiEndpoint: string, route: string = ''): Promise<any> => {
  const req = `${apiEndpoint}${route}`;
  console.log(`Get ${req}`);
  return new Promise((resolve) => {
    axios.get(req)
    .then(res => {
      console.log('Api call result', res.data);
      if (res.status != 200){
        throw Error(res.statusText);
      }
      // return res.data;
      resolve(res.data);
    })
  })
  
  };
//     }
// }

// export default ApiService;