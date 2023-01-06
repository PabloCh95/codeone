
export function getProducts(){
    const url='https://6222994f666291106a29f999.mockapi.io/api/v1/products';
    const params = {
        methods:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    return fetch(url,params)
    .then(res=>{
        return res.json();
    }).then(res=>{
        return res;
    }).catch(error=>{
        return error
    });
}