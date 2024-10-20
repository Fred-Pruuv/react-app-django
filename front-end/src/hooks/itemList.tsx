import React, { useEffect, useState } from 'react';
import { convertToMinutes } from '../components/convertToMinutes';
import { fetchItems } from '../services/Api';


export const ItemList: React.FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const data = await fetchItems();
                setItems(data);

            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        getItems();
    }, []);

    console.log('www',items);

    return (
        <div>
            <h1 className='text-center'>10 Trips from the 'Graham Ave & Conselyea St' Station</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                    <td>Start Station</td>
                    <td>End Station</td>
                    <td>Trip Duration (mins)</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item: any) => (
                        <tr key={item.id}>
                            <td>{item.start_station_name }</td>
                            <td>{item.end_station_name }</td>
                            <td>{convertToMinutes(item.tripduration)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
