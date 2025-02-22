import DeveloperProtectedRoute from "@/components/pages/backend/access/DeveloperProtectedRoute";
import Advertisement from "@/components/pages/backend/developer/advertisement/Advertisement";
import Category from "@/components/pages/backend/developer/category/Category";
import Dashboard from "@/components/pages/backend/developer/dashboard/Dashboard";
import Foods from "@/components/pages/backend/developer/foods/Foods";
import Developer from "@/components/pages/backend/developer/settings/developer/Developer";
import RoleList from "@/components/pages/backend/developer/settings/role/RoleList";
import Settings from "@/components/pages/backend/developer/settings/Settings";
import User from "@/components/pages/backend/developer/settings/user/User";

export const routesDeveloper = [
  {
    route: `/developer/`,
    element: (
      <DeveloperProtectedRoute>
        <Dashboard />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/dashboard`,
    element: (
      <DeveloperProtectedRoute>
        <Dashboard />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/advertisement`,
    element: (
      // <DeveloperProtectedRoute></DeveloperProtectedRoute>
      <DeveloperProtectedRoute>
        <Advertisement />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/category`,
    element: (
      <DeveloperProtectedRoute>
        <Category />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/foods`,
    element: (
      <DeveloperProtectedRoute>
        <Foods />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings`,
    element: (
      <DeveloperProtectedRoute>
        <Settings />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings/role`,
    element: (
      <DeveloperProtectedRoute>
        <RoleList />
      </DeveloperProtectedRoute>
    ),
  },

  {
    route: `/developer/settings/developer`,
    element: (
      <DeveloperProtectedRoute>
        <Developer />
      </DeveloperProtectedRoute>
    ),
  },

  {
    route: `/developer/settings/developer`,
    element: (
      <DeveloperProtectedRoute>
        <Settings />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings/user`,
    element: (
      <DeveloperProtectedRoute>
        <User />
      </DeveloperProtectedRoute>
    ),
  },
];
