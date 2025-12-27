// Firestore Timestamp interface
export interface FirestoreTimestamp {
  _seconds: number;
  _nanoseconds: number;
}

// Dispenser data interface matching the API response
export interface DispenserData {
  id: string;
  location: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
  lastActive: FirestoreTimestamp;
  waterLevel: number;
  status: "good" | "medium" | "low" | "offline";
  building: string;
  capacity: number;
  remaining: number;
  lastRefill: FirestoreTimestamp;
  dailyUsage: number;
  estimatedEmpty: FirestoreTimestamp;
  connectivity: string;
  totalUsers: number;
  lastSync: FirestoreTimestamp;
}

// API Response interface for list of dispensers
export interface DispenserApiResponse {
  success: boolean;
  count: number;
  data: DispenserData[];
}

// API Response interface for single dispenser
export interface SingleDispenserApiResponse {
  success: boolean;
  data: DispenserData;
}
