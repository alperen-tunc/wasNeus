export default function ProductDetailsLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return(
        <section>
            {children}
            <h1>Details Layout works</h1>
        </section>
    )
}