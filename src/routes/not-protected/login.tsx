import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import SEO from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LOGIN_FORM_INPUTS } from '@/consts/auth';
import { useAuth } from '@/provider/auth-provider';
import { loginCustomer } from '@/services/customer-handler/customer-auther';

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function Login() {
  const tokenStore = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: LOGIN_FORM_INPUTS.reduce((acc, { name }) => ({ ...acc, [name]: '' }), {}),
  });

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    const data = await loginCustomer({ email, password });

    if (data.customer) {
      const token = localStorage.getItem('custTokenDevision');
      tokenStore?.updateToken(token);
      navigate('/', { replace: true });
    }
  }

  return (
    <>
      <SEO
        title='Ecommerce Login Page'
        description='Welcome to the Ecommerce Application! Login to your account to continue...'
      />
      <div className='max-w-[250px]'>
        <div className='mb-5'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center gap-y-8'>
              {LOGIN_FORM_INPUTS.map(({ name, text, type }) => (
                <FormField
                  control={form.control}
                  key={name}
                  name={name}
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel className='text-lg'>{text}</FormLabel>
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
    </>
  );
}
