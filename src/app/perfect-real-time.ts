export class PerfectRealTime {
  Name: string;
  Id: number;
  RecordedAtTime: string;
  Directions: Direction[] = [];
};

export class Direction {
  Name: string;
  Id: number;
  Lines: Line[] = [];
}

export class Line {
  Name: string;
  Id: number;
  Times: { Time: number }[] = [];
}

