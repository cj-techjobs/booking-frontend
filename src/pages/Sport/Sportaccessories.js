import React, { useState } from 'react';
import Image from 'next/image';
import Image91 from '../../assets/settingsModalSvg/Image91.png';
import Sorttool from '../../assets/settingsModalSvg/Sorttool.png';
import Image92 from '../../assets/sporttypeimages/Image92.png';
import Rating8 from '../../assets/sporttypeimages/Rating8.png';
import Image97 from '../../assets/sporttypeimages/Image97.png';
import Image98 from '../../assets/sporttypeimages/Image98.png';
import Image94 from '../../assets/sporttypeimages/Image94.png';
import Image96 from '../../assets/sporttypeimages/Image96.png';
import Image95 from '../../assets/sporttypeimages/Image95.png';
import Image93 from '../../assets/sporttypeimages/Image93.png';
import Image123 from '../../assets/sporttypeimages/Image123.png';
import { FaStar } from "react-icons/fa";
import 'animate.css';
import { Range, getTrackBackground } from 'react-range';
const Sportaccessories = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpens, setIsModalOpens] = useState(false);

    // Function to open the modal
    const openModal = () => setIsModalOpen(true);

    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);

    // Function to open the modal
    const openModals = () => setIsModalOpens(true);

    // Function to close the modal
    const closeModals = () => setIsModalOpens(false);

    const [selectedBrands, setSelectedBrands] = useState([]); // State to track multiple selected brands

    const handleBrandClick = (brand) => {
        // Toggle brand selection
        if (selectedBrands.includes(brand)) {
            // Remove brand if already selected
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            // Add brand to selected list
            setSelectedBrands([...selectedBrands, brand]);
        }
    };
    const [value, setValue] = useState(20);

    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };

    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle the change of the selected option
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const [selectedColor, setSelectedColor] = useState('');

    // Function to handle the change of the selected color
    const handleColorChange = (color) => {
        // Toggle selection: unselect if the same color is clicked
        setSelectedColor(selectedColor === color ? '' : color);
    };

    // List of colors
    const colors = [
        { name: 'gray', colorClass: 'bg-gray-300' },
        { name: 'blue', colorClass: 'bg-[#379AE6]' },
        { name: 'white', colorClass: 'bg-white' },
        { name: 'green', colorClass: 'bg-[#117B34]' },
    ];

    const [selectedDeal, setSelectedDeal] = useState('');

    // Function to handle the change of the selected deal
    const handleDealChange = (deal) => {
        // Toggle selection: unselect if the same deal is clicked
        setSelectedDeal(selectedDeal === deal ? '' : deal);
    };

    // List of deals
    const deals = ['All Discounts', "Today's deals", 'Best Seller'];


    const [selectedRating, setSelectedRating] = useState(0);

    // Function to handle the selection and unselection of a star
    const handleStarClick = (rating) => {
        // If the same star is clicked, unselect it; otherwise, select the new rating
        setSelectedRating(selectedRating === rating ? 0 : rating);
    };

    const [values, setValues] = useState([35, 200]); // Initial range values
    const MIN = 5;
    const MAX = 500;

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-[32px] text-[#565D6D] font-semibold ml-[29px] pt-[10px]">Results for "Sport accessories"</h1>
                    <div className="flex gap-[2rem] p-1">
                        <h1 className="text-[#9095A1] text-[12px] ml-[29px] font-normal">Price when purchased online</h1>
                        <p className="text-[#9095A1] text-[12px] ml-[29px] font-normal">(+2003)</p>
                    </div>
                    <div className="flex p-5 gap-[1rem]">
                        <Image src={Image91} alt="Sponsored Image" />
                        <h1 className="text-[12px] text-[#565D6D]">Sponsored</h1>
                    </div>
                </div>
                {/* Three buttons section */}
                <div className="mr-[20px] z-10 flex items-center gap-[1rem]">
                    <div className="w-[111px] p-[10px] h-[40px] rounded-full bg-[#f7f7f7]">
                        <h1 className="text-[14px] text-[#323743]">Under Armour</h1>
                    </div>
                    <div className="w-[90px] p-[9px] h-[40px] rounded-full bg-[#f7f7f7]">
                        <h1 className="text-[14px] text-[#323743]">Top Brands</h1>
                    </div>
                    <div onClick={openModals} className="w-[90px] text-center p-[9px] h-[40px] rounded-full bg-[#f7f7f7]">
                        <h1 className="text-[14px] text-[#323743]">Sort</h1>
                    </div>
                    <div className="w-[74px] p-[11px] h-[40px] rounded-[5px] bg-[#f7f7f7]" onClick={openModal}>
                        <div className="flex gap-1 items-center">
                            <Image src={Sorttool} alt="Sort tool icon" />
                            <h1 className="text-[14px] text-[#323743]">filter</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mb-[2px] gap-[1rem] items-center ml-[30px]'>
                <div className='shadow-xl rounded-[15px] w-[252px] h-[100px]'>
                    <div className='flex items-center gap-[1rem]'>
                        <Image src={Image92} />
                        <div>
                            <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹924</h1>
                            <h1 className='text-[#000000] text-[14px] font-semibold'>Premium Ten...</h1>
                            <h1 className='text-[#9095A1] text-[11px] font-semibold'>A long, straight metal...</h1>
                            <div className='flex items-center'>
                                <Image src={Rating8} />
                                <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shadow-xl  rounded-[15px] w-[252px] h-[100px]'>
                    <div className='flex items-center gap-[1rem]'>
                        <Image src={Image97} />
                        <div>
                            <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹99</h1>
                            <h1 className='text-[#000000] text-[14px] font-semibold'>Tennis Ra...</h1>
                            <h1 className='text-[#9095A1] text-[11px] font-semibold'>hey help boost energy,...</h1>
                            <div className='flex items-center'>
                                <Image src={Rating8} />
                                <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mb-[38px] gap-[3rem]'>
                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image98} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹999</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Wilson Pro Rat</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>


                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mt-[-10px]' width={164} height={114} src={Image123} />
                    <h1 className='text-[12px] text-[#565D6D]'>Zebhyr</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹400</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Versatile Yoga Mat</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#B12805]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#15ABFF]'></div>
                        <h1>+2</h1>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>


                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image93} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹600</h1>
                    <h1 className='text-[#323743] text-[14px] mb-[12px] font-semibold'>Basketball system with Adjustable</h1>

                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>


                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image95} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>$99</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Tennis Racket</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>

                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image96} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>$2</h1>
                    <h1 className='text-[#323743] mb-[13px] text-[14px] font-semibold'>The Essential Equipment for Badminton</h1>

                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center gap-[3rem]'>
                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image94} />
                    <h1 className='text-[12px] text-[#565D6D]'>BlitzFit</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹1000</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Fitness Trackert</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>


                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mt-[-10px]' width={164} height={114} src={Image123} />
                    <h1 className='text-[12px] text-[#565D6D]'>Zebhyr</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹400</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Versatile Yoga Mat</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#B12805]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#15ABFF]'></div>
                        <h1>+2</h1>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>


                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image98} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹999</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Wilson Pro Rat</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>


                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image93} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹600</h1>
                    <h1 className='text-[#323743] text-[14px] mb-[12px] font-semibold'>Basketball system with Adjustable</h1>

                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>

                <div className='shadow-2xl rounded-[15px] w-[201px] h-[269px] p-[18px]'>
                    <Image className='mb-[10px]' src={Image95} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>$99</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Tennis Racket</h1>
                    <div className='flex mb-[10px] items-center gap-[0.7rem] mt-[10px]'>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#EF3607]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#FFD317]'></div>
                        <div className='w-[16px] h-[16px] rounded-full bg-[#8E61F1]'></div>
                    </div>
                    <div className='flex items-center'>
                        <Image src={Rating8} />
                        <h1 className='text-[12px] ml-[4px] text-[#171A1F]'>4.5 <span className=' text-[#8E949F]'>(99)</span></h1>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-end ">
                    <div
                     className=" animate__animated animate__fadeInRight bg-white rounded-[20px] w-[350px] h-[720px] p-4 overflow-y-auto mr-[25px] mt-[220px] shadow-lg">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mt-3 mb-4">
                            <h2 className="text-lg font-bold">Filters</h2>
                            <div onClick={closeModal}>
                                <button
                                    className=" text-center  text-[#171A1F] font-medium"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                        <div className='w-[315px] h-[1px] mb-[20px] bg-[#9095A1]'></div>

                        {/* Categories Section */}
                        <div className="mb-4 justify-between flex">
                            <h3 className="font-semibold text-md">Categories</h3>
                            <button className="text-[#9095A1] text-sm mt-1">View all</button>
                        </div>

                        {/* Brand Section */}
                        <div className="mb-6">
                            <div className='flex justify-between'>
                                <h3 className="font-semibold text-md">Brand</h3>
                                <button className="text-[#9095A1] text-sm mb-2">Collapse</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['All brands', 'Premium Brands', 'Top Brands', 'Zephyr', 'StrideForce', 'BlitzFit', 'AeroGlide', 'XtremeXtend'].map((brand) => (
                                    <button
                                        key={brand}
                                        onClick={() => handleBrandClick(brand)}
                                        className={`text-sm px-3 py-1 rounded-full ${selectedBrands.includes(brand)
                                            ? 'bg-blue-900 text-white' // Selected brand style
                                            : 'bg-gray-200' // Unselected brand style
                                            }`}
                                    >
                                        {brand}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold text-md">Color</h3>
                            <div className="flex items-center gap-[1px] mt-2">
                                {colors.map(({ name, colorClass }) => (
                                    <div
                                        key={name}
                                        className={`flex w-[150px] rounded-full justify-center h-[35px] items-center gap-[0.4rem] 
              ${selectedColor === name ? 'bg-[#d4d4d4] border-2 border-black' : 'bg-[#eaeaea]'} cursor-pointer`}
                                        onClick={() => handleColorChange(name)}
                                    >
                                        <span className={`w-[20px] h-[20px] rounded-full ${colorClass} border`}></span>
                                        <h1 className={`text-[14px] ${selectedColor === name ? 'font-semibold' : 'font-normal'}`}>
                                            {name}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Price Range Section */}

                        <div className="mb-4">
                            <h2 className="font-semibold mb-7">Price range</h2>
                            <div className="w-full flex flex-col items-center">
                                <Range
                                    values={values}
                                    step={1}
                                    min={MIN}
                                    max={MAX}
                                    onChange={(values) => setValues(values)}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '6px',
                                                width: '100%',
                                                borderRadius: '4px',
                                                background: getTrackBackground({
                                                    values,
                                                    colors: ['#A5B4FC', '#1E3A8A', '#A5B4FC'],
                                                    min: MIN,
                                                    max: MAX,
                                                }),
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props, isDragged }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '50%',
                                                backgroundColor: '#ffffff',
                                                border: '3px solid #1E3A8A',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                boxShadow: '0px 2px 6px #AAA',
                                            }}
                                        />
                                    )}
                                />
                                <div className="flex justify-between w-full mt-4 text-sm text-gray-700">
                                    <span>${MIN}</span>
                                    <span>${values[0]}</span>
                                    <span>${values[1]}</span>
                                    <span>${MAX}</span>
                                </div>
                            </div>
                        </div>

                        {/* Deals and Discounts */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-md">Deals & Discounts</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {deals.map((deal) => (
                                    <button
                                        key={deal}
                                        onClick={() => handleDealChange(deal)}
                                        className={`text-sm px-3 py-1 rounded-full cursor-pointer ${selectedDeal === deal ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                                            }`}
                                    >
                                        {deal}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Ratings Section  */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-md">Ratings</h3>
                            <div className="flex gap-2 mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        className={`flex items-center gap-1 ${selectedRating >= star ? 'text-yellow-500' : 'text-[#d4d4d4]'
                                            }`}
                                    >
                                        <FaStar />
                                    </button>
                                ))}
                                &up
                            </div>
                        </div>
                        {/* View Results Button */}
                        <button className="bg-blue-900 text-white w-full py-2 rounded-full mt-">
                            View results
                        </button>
                    </div>
                </div>
            )}
            {isModalOpens && (
                <div className=" z-50 absolute inset-0 bg-black bg-opacity-20 flex justify-end ">
                    <div className=" bg-white rounded-[24px] w-[390px] h-[331px] p-4 overflow-y-auto mr-[25px] mt-[204px] shadow-lg">
                        <div className="flex justify-between items-center mt-3 mb-4">
                            <h2 className="text-[16px] font-semibold text-[#171A1F]">Sorting</h2>
                            <div onClick={closeModals}>
                                <button
                                    className=" text-center  text-[#171A1F] font-normal"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                        <div className='w-[358px] h-[1px] mb-[20px] bg-[#9095A1]'></div>
                        <div className="flex flex-col gap-[0.5rem]">
                            {['Best Seller', 'Best Match', 'Price', 'Rating'].map((option) => (
                                <div key={option}>
                                    <input
                                        type="radio"
                                        id={option}
                                        name="options"
                                        value={option}
                                        onChange={() => handleOptionChange(option)}
                                        checked={selectedOption === option}
                                    />
                                    <label
                                        htmlFor={option}
                                        className={selectedOption === option ? 'text-black ml-[10px]' : 'text-black font-normal ml-[10px]'}
                                    >
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sportaccessories
