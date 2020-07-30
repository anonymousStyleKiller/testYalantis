import React, { useCallback } from 'react';

export const GetData = () => {
    const dataOfUsers = useCallback(async () => {
        try {
            const response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.message || 'Error');
            }
            return json;
        } catch (e) {
            throw e;
        }
    }, []);
    return {dataOfUsers}
};

