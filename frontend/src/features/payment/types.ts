export interface Train {
  id: number;
  name: string;
  trainNo: number;
  startStation: string;
  endStation: string;
  stops: string[];
  departureDate: Date;
  arrivalDate: Date;
  type: string;
  status: string;
  HardSeatPrice: number;
  HardSleepPrice: number;
  capacity: number;
  adminId: number;
}
