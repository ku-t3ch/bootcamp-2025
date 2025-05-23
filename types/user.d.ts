export interface User {
  username: string;
  team: string;
  score: number;
  teamScore?: number;
  role: "user" | "admin";
  logoUrl?: string;
}
