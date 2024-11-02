import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookId, image, author, bookName, tags, rating, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card border gap-6 p-6" >
                <div className="rounded-2xl bg-base-200">
                    <img
                        src={image}
                        alt=""
                        className="py-8 max-h-[166px] w-1/3 mx-auto" />
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col flex-grow gap-4">
                        <div className="space-x-2 text-center">
                            {
                                tags.map((tag, index) => <div key={index} className="badge bg-green-50 text-green-500">{tag}</div>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <p> By : {author}</p>
                    </div>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="flex justify-between">
                        <p><small>{category}</small></p>
                        <div className="flex items-center gap-1 ">
                            <small>{rating}</small>
                            <IoStarHalf className="text-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;