'use client';
import '@/styles/globals.css'
import { useAuth, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, RedirectToUserProfile } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardPage from "./DashboardPage";

function MyApp() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !user?.sessionClaims?.publicMetadata.onboardingComplete) {
      router.push('/onboarding');
    }
  }, [user, router]);
  return (
      <main>
        <SignedOut>
          <h1>Welcome to HumbleHR</h1>
          <SignInButton className="button" />
          <SignUpButton  className="button"/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
          <DashboardPage/>
        {/* <RedirectToUserProfile /> */}
        </SignedIn>
      </main>
  )
}

export default MyApp;