import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import SEO from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { REGISTER_FORM_INPUTS } from '@/consts/auth';
import { useAuth } from '@/provider/auth-provider';
import { loginCustomer } from '@/services/customer-handler/customer-auther';
import { createCustomer } from '@/services/customer-handler/customer-creator';

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  'confirm password': z.string(),
  email: z.string(),
});

export default function Register() {
  const tokenStore = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      'confirm password': '',
      email: '',
    },
  });

  async function onSubmit({ email, password, firstName, lastName }: z.infer<typeof formSchema>) {
    const data = await createCustomer({ email, password, firstName, lastName })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    if (data.customer) {
      const signInData = await loginCustomer({ email, password });

      if (signInData.customer) {
        const token = localStorage.getItem('custTokenDevision');
        tokenStore?.updateToken(token);
        navigate('/', { replace: true });
      }
    }
  }

  return (
    <>
      <SEO
        title='Ecommerce Registration Page'
        description='Welcome to the Ecommerce Application! Register your account to continue...'
      />
      <div className='max-w-[250px]'>
        <div className='mb-5'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center gap-y-8'>
              {REGISTER_FORM_INPUTS.map(({ name, type }) => (
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
                Sign up
              </Button>
            </form>
          </Form>
        </div>

        <p className='text-center text-xs'>
          Have an account?{' '}
          <Link className='underline duration-300 hover:text-neutral-500' to='/login'>
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
