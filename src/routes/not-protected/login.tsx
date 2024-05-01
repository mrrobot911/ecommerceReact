import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LOGIN_FORM_INPUTS } from '@/consts/auth';

// ? Придумать цикл
const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit() {}
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   // console.log(values);
  // }

  return (
    <div className='max-w-[250px]'>
      <div className='mb-5'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center gap-y-8'>
            {LOGIN_FORM_INPUTS.map(({ name, type }) => (
              <FormField
                control={form.control}
                key={name}
                name={name}
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-lg'>{name[0].toUpperCase() + name.slice(1)}</FormLabel>
                    <FormControl>
                      <Input type={type} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            <Button className='w-full text-lg font-medium uppercase' size='lg' type='submit'>
              Sign in
            </Button>
          </form>
        </Form>
      </div>

      <p className='text-center text-xs'>
        <Link className='underline duration-300 hover:text-neutral-500' to='/register'>
          Sign up
        </Link>
        &nbsp;if&nbsp;you don&rsquo;t have an&nbsp;account yet.
      </p>
    </div>
  );
}
