import { Outlet } from 'react-router-dom';

export default function ProtectedRoot() {
  return (
    <>
      <div>Header</div>
      <main className='p-5'>
        <Outlet />
      </main>
    </>
  );
}
