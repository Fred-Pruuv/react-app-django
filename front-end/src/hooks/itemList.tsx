import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchItemsAsync } from '../features/itemsSlice';
import { convertToMinutes } from '../components/convertToMinutes';

export const ItemList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.items.items);
    const status = useSelector((state: RootState) => state.items.status);
    const error = useSelector((state: RootState) => state.items.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItemsAsync());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

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
                    {
                    items.map((item: any) => (
                        <tr key={item.trip_id}>
                            <td>{item.start_station_name}</td>
                            <td>{item.end_station_name}</td>
                            <td>{convertToMinutes(item.tripduration)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
