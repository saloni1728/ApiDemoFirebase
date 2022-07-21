export const CustomLog=(store)=>(next)=>(action)=>{
    console.log("custom middleware");
    console.log(action.type);
    next(action);
}