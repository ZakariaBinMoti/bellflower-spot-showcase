import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/lib/event';
import { redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/booknow')({
  head: () => pageHead('Book a Spot', 'Preview Bellflower Boulevard exhibitor spots for the Bellflower Car Show.'),
  beforeLoad: () => { throw redirect({ to: '/book-spot' }); },
});
