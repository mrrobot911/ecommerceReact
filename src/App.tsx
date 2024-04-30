import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export default function App() {
  return (
    <div className='p-5'>
      <h1 className='text-3xl mb-2 font-bold text-red-500 underline'>Hello world!</h1>
      <div className='space-x-5'>
        <Button asChild variant='outline'>
          <Link to='/'>Login</Link>
        </Button>
        <Button variant='destructive'>Fuck you!</Button>
      </div>
    </div>
  );
}
