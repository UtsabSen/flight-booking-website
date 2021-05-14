export const isAuthenticated=()=>{
    let data = JSON.parse(localStorage.getItem("data"))
    // console.log("Data",data)
    if(typeof window !== "undefined"){
        if(data === null){
            return false //JSON.parse(localStorage.getItem("data"))
        }
        else if (data.id === ""){
            return false;
        }
        else {
            return true;
        }
    }
}
export const isAdmin=()=>{
    if(typeof window !== "undefined"){
        if(localStorage.getItem("data")){
            const data= JSON.parse(localStorage.getItem("data"));
            return data.role === "Admin";
        }
        else {
            return false;
        }
    }
}

// export const ticketData=()=>{
//     if(typeof window !== "undefined"){
//         if(localStorage.getItem("data")){
//             const data= JSON.parse(localStorage.getItem("data"));
//             return data.role === "Admin";
//         }
//         else {
//             return false;
//         }
//     }
// }



export const ticketData =()=>{
    if(typeof window !== "undefined"){
        return JSON.parse(localStorage.getItem("ticketData"))
    }
}
export const userTicket =()=>{
    if(typeof window !== "undefined"){
        return JSON.parse(localStorage.getItem("userTicket"))
    }
}


export const userInput =()=>{
    if(typeof window !== "undefined"){
        return JSON.parse(localStorage.getItem("userInput"))
    }
}

export const logData=()=>{
    return JSON.parse(localStorage.getItem("data"))
}


export const logout = () => {
    localStorage.removeItem("data")
    localStorage.removeItem("userInput")
    localStorage.removeItem("userTicket")
    localStorage.removeItem("currentTicket")
}

export const currentTicket = () => {
    return JSON.parse(localStorage.getItem("currentTicket"))
}

export const compare = ( a, b ) => {
    if ( a.location < b.location ){
        return -1;
    }
    if ( a.location > b.location ){
        return 1;
    }
    return 0;
}
