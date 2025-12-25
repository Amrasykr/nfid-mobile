import { FirestoreTimestamp } from "./dispenser";

// User information interface
export interface UsageUser {
  name: string;
  NIM: string;
  cohort: string;
  status: boolean;
  studyProgram: string;
}

// Usage history data interface
export interface UsageHistoryData {
  id: string;
  day: string;
  dispenserId: string;
  date: FirestoreTimestamp;
  userId: string;
  usage: number;
  user: UsageUser;
}

// Date range interface
export interface UsageDateRange {
  from: string;
  to: string;
}

// Usage history API response interface
export interface UsageHistoryApiResponse {
  success: boolean;
  count: number;
  dateRange: UsageDateRange;
  data: UsageHistoryData[];
}
