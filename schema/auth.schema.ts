import { z } from "zod";

const zUsername = z.string().min(1, "โปรดระบุชื่อผู้ใช้");
const zPassword = z.string().min(1, "โปรดระบุรหัสผ่าน");

const LoginSchema = z.object({
  username: zUsername,
  password: zPassword,
});

export default LoginSchema;
export type LoginSchemaInput = z.infer<typeof LoginSchema>;
