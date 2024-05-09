import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/provider/auth-provider';

export default function ProtectedRoot() {
  const tokenStore = useAuth();

  if (!tokenStore) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <div>Header</div>
      <main className='p-5'>
        <Outlet />
      </main>
    </>
  );
}
