import SignInButton from "@/components/Auth/SignInButton";

export default function LoginPage() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="flex flex-col items-center justify-center w-fit p-8 bg-primary rounded-xl">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Cinkod Admin
        </h1>
        <p className="text-center text-gray-700">
          Sign in to access your account
        </p>
        <SignInButton />
      </div>
    </main>
  );
}
