export const StarRating = ({ rating }: { rating: number }) => {
    return (
        <ul className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <li key={index + rating} className="">
                    {index >= rating ? <span className="">&#9734;</span> : <span className="">&#9733;</span>}
                </li>
            ))}
        </ul>
    );
};
