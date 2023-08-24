


function date(){

    let date = new Date()

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours()
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();



    return [`${year}-${month}-${day}`, `${hour}:${minutes}:${seconds}`]

}

export default date