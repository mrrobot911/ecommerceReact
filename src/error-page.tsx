import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  console.error(error.data);

  return (
    <section className='container flex min-h-dvh items-center justify-center text-center'>
      <div>
        <div className='mb-8'>
          <h1 className='mb-2 text-balance text-3xl font-bold'>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    </section>
  );
}
