import { useCallback, useEffect, useState } from 'react';

export const GetData = () => {
    const [data, setData] = useState([])
    const dataOfUsers = useCallback(async () => {
        try {
            const response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.message || 'Error');
            }
            setData(json);
        } catch (e) {
            throw e;
        }
    }, []);

    useEffect(() => {
        dataOfUsers();
    }, [dataOfUsers]);
    return {data}
};

