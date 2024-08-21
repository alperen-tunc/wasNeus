export default function WithAuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <h2>With auth  layout works</h2>
            {children}
        </section>
    )
}