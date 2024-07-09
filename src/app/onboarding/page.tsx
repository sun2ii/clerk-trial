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
    <div className="container">
  <h1 className="title">Welcome</h1>
  <form className="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)); }}>
    <div className="form-group">
      <label>Birthday</label>
      <p className="description">Enter your birthdate.</p>
      <input type="date" name="birthday" className="input" required />
    </div>

    <div className="form-group">
      <label>City</label>
      <p className="description">Enter your city.</p>
      <input type="text" name="city" className="input" required />
    </div>

    <div className="form-group">
      <label>State</label>
      <p className="description">Enter your state.</p>
      <input type="text" name="state" className="input" required />
    </div>

    {error && <p className="error">Error: {error}</p>}
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>
  );
}
