
import { Button } from '@/components/ui/button'
// import Form from 'next/form'
import Link  from 'next/link';

export default async function SeedDatabale({searchParams}: {searchParams: Promise<{req: string}>}) {
    const reqType = await searchParams;
    const req = reqType.req;
    console.log('Request Type:', req);
  return (
    <>
        {req && <Button disabled>Seeding Database...</Button>}
        <Button type="submit" asChild >
            <Link href='/seed?req=manual'>Seed Local Database</Link>
        </Button>
    
    </>
  )
}
