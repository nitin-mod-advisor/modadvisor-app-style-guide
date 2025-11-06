
'use client';

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

const PageClient = dynamic(() => import('@/app/page-client'), {
  ssr: false,
  loading: () => (
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
  ),
})

export default function Home() {
  return <PageClient />
}
