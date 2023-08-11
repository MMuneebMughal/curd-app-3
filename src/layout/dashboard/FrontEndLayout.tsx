import { Sidebar } from '@src/layout/dashboard/components/Sidebar';
import { Topbar } from '@src/layout/dashboard/components/Topbar';

export const DashboardFrontEndLayout = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
    </div>
  );
};
