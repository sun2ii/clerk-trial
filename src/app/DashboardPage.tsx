import '@/styles/dashboard.css'
import { useUser, useAuth, OrganizationList } from '@clerk/nextjs';

export default function DashboardPage() {
  const { user } = useUser();
  const { orgRole, orgSlug } = useAuth();
  const city = user?.publicMetadata.city;
  const state = user?.publicMetadata.state;
  const birthday = user?.publicMetadata.birthday;

  return (
    <main className="main-container">
      <div className="content">
        <div className="info-section">
          <p>Your Organization: {orgSlug}</p>
          <p>Your Role: {orgRole?.split(':')[1]}</p>
          <div className="info">City: {city}</div>
          <div className="info">State: {state}</div>
          <div className="info">Birthday: {birthday}</div>
          <OrganizationList hidePersonal afterSelectOrganizationUrl="/organization/:slug" />
        </div>
        <div className="image-section">
          <img src="/dashboard.png" alt="Organization Architecture" />
        </div>
      </div>
    </main>
  );
}