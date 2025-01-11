import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to calculate time difference
export function getTimeDifference(departure: string, arrival: string): string {
  const departureDate = new Date(departure);
  const arrivalDate = new Date(arrival);
  const diffInMs = arrivalDate.getTime() - departureDate.getTime();
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours} hrs ${minutes} mins`;
}
