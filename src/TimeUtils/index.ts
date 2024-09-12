export function minutesToMilliseconds(minutes: number): number {
  return minutes * 60 * 1000;
}

export function hoursToMilliseconds(hours: number): number {
  return hours * 60 * 60 * 1000;
}

export function minutesToSeconds(minutes: number): number {
  return minutes * 60;
}

export function hoursToSeconds(hours: number): number {
  return hours * 60 * 60;
}

export function daysToSeconds(days: number): number {
  return days * 24 * 60 * 60;
}
