import { DispenserApiResponse, DispenserData, SingleDispenserApiResponse } from "@/interfaces/dispenser";

const API_BASE_URL = "https://nfid-iot.vercel.app/api";

/**
 * Fetches all dispensers from the API
 * @returns Promise containing array of dispenser data
 * @throws Error if the API request fails
 */
export async function fetchDispensers(): Promise<DispenserData[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/dispensers`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const result: DispenserApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error("API returned unsuccessful response");
    }
    
    return result.data;
  } catch (error) {
    console.error("Error fetching dispensers:", error);
    throw error;
  }
}

/**
 * Fetches a single dispenser by ID from the API
 * @param id Dispenser ID
 * @returns Promise containing dispenser data
 * @throws Error if the API request fails
 */
export async function fetchDispenserById(id: string): Promise<DispenserData> {
  try {
    const response = await fetch(`${API_BASE_URL}/dispensers/${id}`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const result: SingleDispenserApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error("API returned unsuccessful response");
    }
    
    if (!result.data) {
      throw new Error("Dispenser not found");
    }
    
    return result.data;
  } catch (error) {
    console.error(`[API] Error fetching dispenser ${id}:`, error);
    throw error;
  }
}
