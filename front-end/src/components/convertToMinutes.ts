// components/convertToMinutes.ts

export function convertToMinutes(durationStr: string): number {
    // Convert duration string to a Date object
    const duration = new Date(durationStr);
    
    // Calculate total minutes: hours * 60 + minutes + seconds/60
    const totalMinutes = duration.getUTCHours() * 60 + duration.getUTCMinutes() + duration.getUTCSeconds() / 60;

    return Math.round(totalMinutes);
}
