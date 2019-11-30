export enum Direction {
    N,
    NW,
    NE,
    S,
    SW,
    SE
}

export interface FlightStatus {
    aircraftId: string;
    time: Date;
    altitudes: number;
    latitude: number;
    longitude: number;
    speed: number;
    direction: Direction;
}