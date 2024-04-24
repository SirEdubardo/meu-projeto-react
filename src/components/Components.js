
import React, { useEffect, useState } from 'react';
import apiClient from '../api';

function ExampleComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiClient.get('/endpoint'); // Substitua pelo endpoint da sua API
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ExampleComponent;
