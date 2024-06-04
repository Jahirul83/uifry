import readyImg from '../../../assets/ready.png';

const FAQ = () => {
    return (
        <div className="p-4">
            {/* FAQ titles */}
            <h1 className="text-red-400">FAQ</h1>
            <h1 className="text-4xl font-bold w-72">Frequently Asked Questions</h1>
            {/* FAQ content */}
            <div>
                {/* content 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-red-400 p-5  text-white rounded-md">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
                {/* content 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="bg-red-400 p-5  text-white rounded-md">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
                {/* content 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-red-400 p-5  text-white rounded-md">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
            </div>
            {/* ready to get started image */}
            <div className='my-2 md:my-24'>
                <img className='w-full' src={readyImg} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default FAQ;