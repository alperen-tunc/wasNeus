import { notFound } from "next/navigation";

export default function ReviewsDetail({
    params,
}: {
    params: {
        productId: string;  
        reviewsID: string;
    };
}) {

    if(parseInt(params.reviewsID) > 1000) {
        notFound();
    } else {
    return (
        <h1>Review {params.reviewsID} for product {params.productId}</h1>
    )}
}