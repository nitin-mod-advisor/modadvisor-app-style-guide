import { ComponentPreviews } from "@/components/style-guide/component-previews";
import LiveStyleGuide from "@/components/style-guide/live-style-guide";

export default function ComponentsPage({ params }: { params: { slug: string } }) {
    return (
        <LiveStyleGuide>
            <div className="p-4 sm:p-6 lg:p-8">
                <ComponentPreviews componentToShow={params.slug} />
            </div>
        </LiveStyleGuide>
    )
}
