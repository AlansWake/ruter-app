export class OriginalRuterData {
        RecordedAtTime: string;
        MonitoringRef: string;
        MonitoredVehicleJourney: {
            LineRef: string;
            DirectionRef: string;
            FramedVehicleJourneyRef: {
                DataFrameRef: string;
                DatedVehicleJourneyRef: string;
            },
            PublishedLineName: string;
            DirectionName: string;
            OperatorRef: string;
            OriginName: string;
            OriginRef: string;
            DestinationRef: string;
            DestinationName: string;
            OriginAimedDepartureTime: string;
            DestinationAimedArrivalTime: string;
            Monitored: boolean;
            InCongestion: string;
            Delay: string;
            TrainBlockPart: {
                NumberOfBlockParts: string;
            },
            BlockRef: string;
            VehicleRef: string;
            VehicleMode: string;
            VehicleJourneyName: string;
            MonitoredCall: {
                VisitNumber: string;
                VehicleAtStop: boolean;
                DestinationDisplay: string;
                AimedArrivalTime: string;
                ExpectedArrivalTime: string;
                AimedDepartureTime: string;
                ExpectedDepartureTime: string;
                DeparturePlatformName: string;
            };
            VehicleFeatureRef: string;
        };
        Extensions: {
            IsHub: boolean;
            OccupancyData: string;
            Deviations: string[];
            LineColour: string;
            DepartureNamePreMapping: string;
        };
        StopVisitNote: string[];
    }
    