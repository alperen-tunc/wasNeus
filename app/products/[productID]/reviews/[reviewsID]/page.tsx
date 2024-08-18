export default function ReviewsDetail({
    params,
}: {
    params: {
        productID: string;  
        reviewsID: string;
    };
}) {
    return (
        <h1>Review {params.reviewsID} for product {params.productID}</h1>
    );
}