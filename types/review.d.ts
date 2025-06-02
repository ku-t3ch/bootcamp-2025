import type { Team } from "./team";

export interface Review {
  id: string;
  memberId: string;
  stationId: number;
  rating: number;
  comment?: string;
  member: {
    username: string;
    team: {
      name: Team["name"];
    };
  };
}
