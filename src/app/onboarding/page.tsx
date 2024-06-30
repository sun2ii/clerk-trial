"use client";

import '@/styles/onboarding.css'
import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";

export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (formData: any) => {
    const res = await completeOnboarding(formData);
    if (res?.message) {
      await user?.reload();
      router.push("/");
    }
    if (res?.error) {
      setError(res?.error);
    }
  };

  return (
    <div class="container">
  <h1 class="title">Welcome</h1>
  <form class="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)); }}>
    <div class="form-group">
      <label>Birthday</label>
      <p class="description">Enter your birthdate.</p>
      <input type="date" name="birthday" class="input" required />
    </div>

    <div class="form-group">
      <label>City</label>
      <p class="description">Enter your city.</p>
      <input type="text" name="city" class="input" required />
    </div>

    <div class="form-group">
      <label>State</label>
      <p class="description">Enter your state.</p>
      <input type="text" name="state" class="input" required />
    </div>

    {error && <p className="error">Error: {error}</p>}
    <button type="submit" class="submit-btn">Submit</button>
  </form>
</div>
  );
}
