function ShowData(data) {
    let January = [];
    let February = [];
    let March = [];
    let April = [];
    let May = [];
    let June = [];
    let July = [];
    let August = [];
    let September = [];
    let October = [];
    let November = [];
    let December = [];

    function InteractingDate(data) {
        data.sort();
        let arr = data.map(item => item.dob);
        for (let i = 0; i < arr.length; i++) {
            let month = new Date(arr[i]).getMonth();
            console.log(arr[i]);
            CheckMonth(month, data[i]);
        }
    }

    function CheckMonth(month, arg) {
        switch (month) {
            case 0:
                January.push(arg);
                break
            case 1:
                February.push(arg);
                break
            case 2:
                March.push(arg);
                break
            case 3:
                April.push(arg);
                break
            case 4:
                May.push(arg);
                break
            case 5:
                June.push(arg);
                break
            case 6:
                July.push(arg);
                break
            case 7:
                August.push(arg);
                break
            case 8:
                September.push(arg);
                break
            case 9:
                October.push(arg);
                break
            case 10:
                November.push(arg);
                break
            case 11:
                December.push(arg);
                break
            default:
                break
        }
    }
    InteractingDate(data);
    return {
        January, September, October, November, May, March, July, June, August, February, December, April
    }
}

export default ShowData;