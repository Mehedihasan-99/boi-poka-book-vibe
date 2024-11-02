import books from '../../assets/images/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="px-[120px] py-20 rounded-xl mt-12 mb-24 hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row gap-[86px]">
                    <div className="space-y-12">
                        <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-green-500 border-none">View The List</button>
                    </div>
                    <img
                        src={books}
                        className="max-w-80 max-h-96 rounded-lg border" />
                </div>
            </div>
        </div>
    );
};

export default Banner;