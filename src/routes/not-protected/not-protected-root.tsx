import { Outlet } from 'react-router-dom';

export default function NotProtectedRoot() {
  return (
    <main className='container flex min-h-dvh items-center justify-center'>
      <Outlet />
    </main>
  );
}
