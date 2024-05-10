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

interface FormInput {
  name: keyof (typeof formSchema)['shape'];
  text: string;
  type: string;
  placeholder: string;
  style: string;
}

interface Block {
  [key: string]: FormInput[];
}

const containerStyle: { [key: string]: string } = {
  main: 'w-full',
  shipping: 'w-1/2 p-4',
  billing: 'w-1/2 p-4',
};

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  email: z.string(),
  shippingStreet: z.string(),
  shippingCity: z.string(),
  shippingPostalCode: z.string(),
  shippingCountry: z.string(),
  billingStreet: z.string(),
  billingCity: z.string(),
  billingPostalCode: z.string(),
  billingCountry: z.string(),
});

export default function Register() {
  const tokenStore = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: REGISTER_FORM_INPUTS.reduce((acc, { name }) => ({ ...acc, [name]: '' }), {}),
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

  const blocks: Block = REGISTER_FORM_INPUTS.reduce((acc: Block, input) => {
    acc[input.style] = [...(acc[input.style] || []), input];
    return acc;
  }, {});

  return (
    <>
      <SEO
        title='Ecommerce Registration Page'
        description='Welcome to the Ecommerce Application! Register your account to continue...'
      />
      <div className='max-w-[500px]'>
        <div className='mb-5 flex'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-row flex-wrap gap-y-8'>
              {Object.keys(blocks).map((style) => (
                <div key={style} className={containerStyle[style]}>
                  {blocks[style].map(({ name, text, type, placeholder }) => (
                    <FormField
                      control={form.control}
                      key={name}
                      name={name}
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='text-lg'>{text}</FormLabel>
                          <FormControl>
                            <Input type={type} placeholder={placeholder} {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
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
