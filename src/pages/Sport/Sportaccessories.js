import React from 'react'
import Image from "next/image";
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
const Sportaccessories = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-[32px] text-[#565D6D] font-semibold ml-[29px] pt-[20px]">Results for "Sport accessories"</h1>
                    <div className='flex gap-[2rem] p-1'>
                        <h1 className="text-[#9095A1] text-[12px] ml-[29px] font-normal">Price when purchased online</h1>
                        <p className="text-[#9095A1] text-[12px] ml-[29px] font-normal">(+2003)</p>
                    </div>
                    <div className='flex p-5 gap-[1rem]'>
                        <Image src={Image91} />
                        <h1 className='text-[12px] text-[#565D6D]'>Sponsored</h1>
                    </div>
                </div>
                <div className=' mr-[20px] flex items-center gap-[1rem]'>
                    <div className='w-[114px] p-[9px] h-[40px] rounded-full bg-[#f7f7f7]'>
                        <h1 className="text-[14px] text-[#323743]">Under Armour</h1>
                    </div>
                    <div className='w-[90px] p-[9px] h-[40px] rounded-full bg-[#f7f7f7]'>
                        <h1 className="text-[14px] text-[#323743]">Top Brands</h1>
                    </div>
                    <div className='w-[124px] p-[11px] h-[40px] rounded-[5px] bg-[#f7f7f7]'>
                        <div className='flex gap-1 items-center'>
                            <Image src={Sorttool} />
                            <h1 className="text-[14px] text-[#323743]"> Sort & filter</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mb-[20px] gap-[1rem] items-center ml-[30px]'>
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
            <div className='flex justify-center items-center mb-[48px] gap-[3rem]'>
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


            <div className='flex justify-center items-center mb-[40px] gap-[3rem]'>
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
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹999</h1>
                    <h1 className='text-[#323743] text-[14px] font-semibold'>Versatile Yoga Mat</h1>
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
                    <Image className='mb-[10px]' src={Image98} />
                    <h1 className='text-[12px] text-[#565D6D]'>StrideForce</h1>
                    <h1 className='text-[#6D31ED] text-[14px] font-bold'>₹400</h1>
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
        </div>
    )
}

export default Sportaccessories
