
function fetchData(){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let success=false;
            if(success){
                resolve("Successfully fetch the data");
            }else{
                reject("Error to fetch the data");
            }
        },3000)
    });
}

fetchData()
       .then((data)=>{
        console.log(data);
        return data.toLowerCase();
       })
       .then((value)=>{
        console.log(value);
       })
       .catch((err)=>{
        console.error(err);
       });