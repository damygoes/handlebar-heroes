import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email()
})

function NewsletterSubscriptionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Send the form data to the server
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6 space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative max-w-lg'>
                  <label className='sr-only' htmlFor='email'>
                    Email
                  </label>

                  <Input
                    className='rounded-full px-4 py-6 pe-32 ring ring-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                    id='email'
                    type='email'
                    placeholder='youremail@service.com'
                    {...field}
                  />

                  <Button
                    type='submit'
                    variant='default'
                    className='absolute end-2 top-1/2 -translate-y-1/2 rounded-full transition'
                  >
                    Subscribe
                  </Button>
                </div>
                {/* <Input placeholder="shadcn" {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default NewsletterSubscriptionForm
