import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

export const createPlanetAction = async( planet: Partial<Planet>) => {
    try {
        const resp = await planetsApi.post<Planet>('/',planet);
        return resp.data;
    } catch (error) {
        console.error('Error creating planet:', error);
        throw new Error('Error creating planet');
    }
}

export const createPlanetActionForm = async(
    prevState: unknown,
    queryData: FormData
) =>{
    const formData = Object.fromEntries(queryData.entries());
    try {
        const resp = await planetsApi.post<Planet>('/',formData);
        return resp.data;
    } catch (error) {
        console.error('Error creating planet:', error);
        return null;
    }
}