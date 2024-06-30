"use client";

import { UserButton, useUser } from "@clerk/nextjs";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}


export default function Home() {
  const { user } = useUser();
  const city = user?.publicMetadata?.city;
  const state = user?.publicMetadata?.state;
  const birthday = user?.publicMetadata?.birthday;

  return (
    <header>
      <UserButton afterSignOutUrl='/'>
        <UserButton.UserProfilePage
          label="Custom Page"
          url="custom"
          labelIcon={<DotIcon />}
        >
          <div>
            <h3>City: {city} </h3>
            <h3>State: {state} </h3>
            <h3>Birthday: {birthday} </h3>
          </div>
        </UserButton.UserProfilePage>
      </UserButton>
    </header>
  );
}
