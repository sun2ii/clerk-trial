// src/app/organization/[slug].tsx

'use client';

import { Protect, OrganizationProfile, useUser } from "@clerk/nextjs";
import Link from "next/link";

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
              <Protect
                role="org:admin"
                fallback={<h2>NOT an Admin</h2>}
              >
              <h2>Admin</h2>
              <div>You have access because you are an ADMIN</div>
              </Protect>
              <Protect
                condition={has => has({role: "org:admin"}) || has({role: "org:manager"})}
                fallback={<h2>NOT a Manager</h2>}
              >
              <h2>Manager</h2>
              <div>You have access because you are an ADMIN or a MANAGER</div>
              </Protect>
              <Protect
                condition={has => has({role: "org:admin"}) || has({role: "org:manager"}) || has({role: "org:member"})}
                fallback={<p>No permission</p>}
              >
              <h2>Member</h2>
              <div>You have access because you are an ADMIN, MANAGER or MEMBER</div>
              </Protect>
        </div>
      </OrganizationProfile.Page>
          <OrganizationProfile.Page
            label="Go Home"
            labelIcon={<DotIcon />}
            url="/home"
          >
        <Link href="/">Home</Link>
      </OrganizationProfile.Page>
    </OrganizationProfile>
  );
};

export default Organization;