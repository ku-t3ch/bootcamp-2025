import AdminLoginForm from "./LoginForm";

export default function Page() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-[256px] space-y-1.5">
        <h1 className="text-xl">เข้าสู่ระบบ</h1>
        <AdminLoginForm />
      </div>
    </main>
  );
}
