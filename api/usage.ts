import { UsageHistoryApiResponse, UsageHistoryData } from "@/interfaces/usage";

const API_BASE_URL = "https://nfid-iot.vercel.app/api";

/**
 * Fetches weekly usage history for a dispenser
 * @param dispenserId Dispenser ID
 * @returns Promise containing array of usage history data
 * @throws Error if the API request fails
 */
export async function fetchWeeklyUsageHistory(dispenserId: string): Promise<UsageHistoryData[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/usage-history/${dispenserId}/weekly`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const result: UsageHistoryApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error("API returned unsuccessful response");
    }
    
    return result.data || [];
  } catch (error) {
    console.error(`[API] Error fetching usage history for ${dispenserId}:`, error);
    throw error;
  }
}

/**
 * Fetches recent usage history for a dispenser
 * @param dispenserId Dispenser ID
 * @param limit Maximum number of records to fetch
 * @returns Promise containing array of usage history data
 * @throws Error if the API request fails
 */
export async function fetchRecentUsageHistory(dispenserId: string, limit: number = 10): Promise<UsageHistoryData[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/usage-history/${dispenserId}?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const result: UsageHistoryApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error("API returned unsuccessful response");
    }
    
    return result.data || [];
  } catch (error) {
    console.error(`[API] Error fetching recent usage history for ${dispenserId}:`, error);
    throw error;
  }
}
