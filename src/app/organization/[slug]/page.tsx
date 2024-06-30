// src/app/organization/[slug].tsx

'use client';

import { OrganizationProfile, useAuth, useUser } from "@clerk/nextjs";

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

const Organization = () => {
  const { user } = useUser();
  const auth = useUser();

  return (
    <OrganizationProfile routing="hash">
      <OrganizationProfile.Page
        label="User Metadata"
        labelIcon={<DotIcon />}
        url="user-metadata"
      >
        <div>
          <h1>User Metadata</h1>
          <p>City: {user?.publicMetadata?.city}</p>
          <p>State: {user?.publicMetadata?.state}</p>
          <p>Birthday: {user?.publicMetadata?.birthday}</p>
        </div>
      </OrganizationProfile.Page>
      <OrganizationProfile.Page
        label="Access to Data"
        labelIcon={<DotIcon />}
        url="data-access"
      >
        <div>
          <h1>Data Access</h1>
        </div>
      </OrganizationProfile.Page>
    </OrganizationProfile>
  );
};

export default Organization;