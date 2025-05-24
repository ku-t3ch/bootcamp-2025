export interface Team {
  name: string;
  identifier: string;
  totalScore: number;
  logo: string;
  members: {
    name: string;
    score: number;
  }[];
}
