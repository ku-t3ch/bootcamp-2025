export interface User {
  username: string;
  team: string;
  score: number;
  role: "user" | "admin";
}
