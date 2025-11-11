
'use client';

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'
import LiveStyleGuide from '@/components/style-guide/live-style-guide';

const TypographyClient = dynamic(() => import('@/app/typography-client'), {
  ssr: false,
  loading: () => (
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
  ),
})

export default function TypographyPage() {
  return (
    <LiveStyleGuide>
        <TypographyClient />
    </LiveStyleGuide>
  )
}
