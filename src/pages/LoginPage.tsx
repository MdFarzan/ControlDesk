import LoginForm from "@/components/custom/LoginForm";
import GuestLayout from "@/components/layout/GuestLayout";
import React from "react";

export default function LoginPage() {
  return (
    <GuestLayout>
      <section className="w-full h-[100vh] flex items-center justify-center">
        <LoginForm />
      </section>
    </GuestLayout>
  );
}
