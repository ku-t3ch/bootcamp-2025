export interface User {
  username: string;
  team: string;
  score: number | null;
  role: "user" | "admin";
}
