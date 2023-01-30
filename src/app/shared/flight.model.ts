export class Flight {
  public flightId: number;
  public flightNumber: string;
  public scheduledTime: string;
  public location: string;
  public status: string;

  constructor(flightId: number, flightNumber: string, time: string, location: string, status: string) {
    this.flightId = flightId;
    this.flightNumber = flightNumber;
    this.scheduledTime = time;
    this.location = location;
    this.status = status;
  }
}
