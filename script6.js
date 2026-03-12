const userData= async ()=>{
    const Response=await fetch('https://jsonplaceholder.typicode.com/users/1');
    const ID=await Response.json();
    console.log("User ID of ID ", ID);

};
userData();