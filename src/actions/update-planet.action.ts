import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
}

export const updatePlanetAction = async ( planet: Planet ) => {
    try {
        await sleep();
        throw new Error('Simulated error'); // Simulate an error for testing
        const resp = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
        console.log('Planet updated successfully:', resp.data);
        return resp.data;
        
    } catch (error) {
        console.error('Error updating planet:', error);
        throw new Error('Failed to update planet!');
    }
}