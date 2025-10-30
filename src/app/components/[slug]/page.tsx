import { ComponentPreviews } from "@/components/style-guide/component-previews";

export default function ComponentsPage({ params }: { params: { slug: string } }) {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <ComponentPreviews componentToShow={params.slug} />
        </div>
    )
}
