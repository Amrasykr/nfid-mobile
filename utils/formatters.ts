import { FirestoreTimestamp } from "@/interfaces/dispenser";

/**
 * Converts a Firestore timestamp to a readable date string
 * @param timestamp Firestore timestamp object
 * @returns Formatted date string (e.g., "Dec 25, 2024")
 */
export function formatFirestoreDate(timestamp: FirestoreTimestamp): string {
  const date = new Date(timestamp._seconds * 1000);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Converts a Firestore timestamp to a relative time string
 * @param timestamp Firestore timestamp object
 * @returns Relative time string (e.g., "2 min ago", "3 hours ago")
 */
export function formatRelativeTime(timestamp: FirestoreTimestamp): string {
  const now = Date.now();
  const date = timestamp._seconds * 1000;
  const diffMs = now - date;
  
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} min ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
}

/**
 * Converts a Firestore timestamp to a short date string
 * @param timestamp Firestore timestamp object
 * @returns Short date string (e.g., "Dec 25")
 */
export function formatShortDate(timestamp: FirestoreTimestamp): string {
  const date = new Date(timestamp._seconds * 1000);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
