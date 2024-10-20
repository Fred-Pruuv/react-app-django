// components/convertToMinutes.ts

export function convertToMinutes(durationStr: string): number {
    const duration = new Date(durationStr);

    return duration.getMinutes();
}
