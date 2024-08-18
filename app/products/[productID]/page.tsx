export default function Productdetails({
    params
} : {
    params: {productID: string}
}) {

    return (
        <h1>Details is working {params.productID}</h1>
    );
}