
const speed = prompt("Enter your speed");

if (speed <=70){
    window.alert('OK')
}else {
    for(let limit = 70; limit<speed; limit+5){
        for(let point = 1; point<=12; point++){
            if(point<=12){
            window.alert(`Derimeter Points are ${point}`)
            }else{
                window.alert("License Suspended")
            }
            
        }
        break;
        // let point = 1

        // if(limit ===speed){
        //     if(point<=12){
        //         window.alert(`Derimeter Points are ${point}`)
        //     }else{
        //         window.alert("License Suspended")
        //     }
        // }else{
        //     point++
        // }
    }
}