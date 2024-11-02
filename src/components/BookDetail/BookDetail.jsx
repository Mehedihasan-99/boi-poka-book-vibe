import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentId, image, author, bookName, tags, rating, totalPages, publisher, yearOfPublishing, category, review } = book;

    return (
        <div>
            <div className="my-10 rounded-2xl hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full">
                        <img
                            src={image}
                            className="max-w-sm w-full h-full rounded-lg" />
                    </div>
                    <div className="w-full space-y-5">
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">
                            By : {author}
                        </p>
                        <p className="border-y-2 p-3">{category}</p>
                        <p><span className="font-bold pr-2">Review :</span><small>{review}</small></p>
                        <div className="border-b-2 flex gap-8 pb-5">
                            <p className="font-bold">Tag</p>
                            <div className="space-x-2 text-center">
                                {
                                    tags.map((tag, index) => <div key={index} className="badge bg-green-50 text-green-500">{tag}</div>)
                                }
                            </div>
                        </div>
                        <div className="flex  gap-10">
                            <div className="space-y-2">
                                <p>Number of Pages:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                            <div className="space-y-2 font-bold">
                                <p>{totalPages}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className="space-x-2 px-5">
                            <button className="btn bg-red-200">Read</button>
                            <button className="btn bg-green-400">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;