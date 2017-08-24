export class RuterRealTime {
  MinutesToDeparture: number;
  RecordedAtTime: string;
  MonitoredVehicleJourney: {
    PublishedLineName: string;
    DirectionName: string;
    MonitoredCall: {
      DestinationDisplay: string;
      ExpectedDepartureTime: string;
      DeparturePlatformName: string;
    };
  };
}