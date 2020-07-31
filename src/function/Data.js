function Data(data) {
    let month = {
        January : [],
        February : [],
        March : [],
        April : [],
        May : [],
        June : [],
        July : [],
        August : [],
        September : [],
        October : [],
        November : [],
        December : []
    }

    function InteractingDate(data) {
        data.sort();
        let arr = data.map(item => item.dob);
        for (let i = 0; i < arr.length; i++) {
            let numberOfMonth = new Date(arr[i]).getMonth();
            CheckMonth(numberOfMonth, data[i]);
        }
    }

    function CheckMonth(numberOfMonth, data) {
        switch (numberOfMonth) {
            case 0:
                month['January'].push(data);
                break
            case 1:
                month['February'].push(data);
                break
            case 2:
                month['March'].push(data);
                break
            case 3:
                month['April'].push(data);
                break
            case 4:
                month['May'].push(data);
                break
            case 5:
                month['June'].push(data);
                break
            case 6:
                month['July'].push(data);
                break
            case 7:
                month['August'].push(data);
                break
            case 8:
                month['September'].push(data);
                break
            case 9:
                month['October'].push(data);
                break
            case 10:
                month['November'].push(data);
                break
            case 11:
                month['December'].push(data);
                break
            default:
                break
        }
    }
    InteractingDate(data);
    return {month}
}

export default Data;