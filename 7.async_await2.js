function fetchPostData(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Post Data fetched Successfully");
        },3000)
     })
}

function fetchCommentData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Comment Data fetched Successfully");
        },4000);
    })
}

async function getBlogData(){
    console.log("Fetching blogdata....");
    // let postData=await fetchPostData();
    // let CommentData=await fetchCommentData();
    //Promise.all behave same and take argument in a form of array
   const [postData,CommentData] =await Promise.all([fetchPostData(),fetchCommentData()]);

    console.log(postData);
    console.log(CommentData);
    console.log("Blog data fetched successfully!!");
}

getBlogData();