import starIcon from '../../../assets/StarIcon.png';
import features from '../../../assets/features.png';

const Features = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div>
                <img src={features} alt="" />
            </div>
            <div className='p-4'>
                <h1 className='text-xl font-semibold text-red-400'>Features</h1>
                <h1 className='text-4xl font-bold'>Uifry Premium</h1>
                <div className='mt-3 p-11'>
                    <div className='flex'>
                        <img className='mr-2' src={starIcon} alt="" />
                        <h1>Budgeting Intervals</h1>
                    </div>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className='flex'>
                        <img className='mr-2' src={starIcon} alt="" />
                        <h1>Budgeting Intervals</h1>
                    </div>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className='flex'>
                        <img className='mr-2' src={starIcon} alt="" />
                        <h1>Budgeting Intervals</h1>
                    </div>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;