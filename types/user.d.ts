export interface User {
  username: string;
  team: string;
  score: number;
  team_score?: number;
  role: "user" | "admin";
  logo_url?: string;
}
