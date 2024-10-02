function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({name:"ritik",url:"http:ritik-singh.com"})
        },2000);
    })
}

async function getUserData(){
    try{
        console.log("Fetching user data ...");
        const userData=await fetchUserData();
        console.log("User data :" ,userData);
        console.log("user data fetching successflly");    
    }
   catch(error){
    console.log("Error fetching data",error);
   }
}

getUserData();