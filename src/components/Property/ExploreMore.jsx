import Image from 'next/image';

export default function ExploreMore() {
    return (
        <div className=" py-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">Explore more</h2>
            <p className="text-gray-700 mt-2">We provide Housing at your finger tips</p>
        </div>

        <div className="max-w-6xl mx-auto flex space-x-4 overflow-x-scroll scrollbar-hide px-4">
            {/* Buy Housing Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center min-w-[300px] hover:bg-gradient-to-r hover:from-[#00985B] hover:to-[#000000] transition-all duration-300 hover:text-white cursor-pointer">
                <Image src="/images/buy-housing-icon.png" alt="Buy Housing Icon" width={80} height={80} />
                <h3 className="text-2xl font-bold text-green-700 mt-4 transition-colors duration-300">Buy Housing</h3>
                <p className="text-gray-600 mt-2 text-center transition-colors duration-300">
                    Rumah impian kini jadi kenyataan, Beli rumah baru dengan fasilitas terbaik dengan lingkungan yang nyaman.
                </p>
            </div>

            {/* Sewa Rumah Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center min-w-[300px] hover:bg-gradient-to-r hover:from-[#00985B] hover:to-[#000000] transition-all duration-300 hover:text-white cursor-pointer">
                <Image src="/images/sewa-rumah-icon.png" alt="Sewa Rumah Icon" width={80} height={80} />
                <h3 className="text-2xl font-bold text-green-700 mt-4 transition-colors duration-300">Sewa Rumah</h3>
                <p className="text-gray-600 mt-2 text-center transition-colors duration-300">
                    Sewa rumah yang indah untuk keluarga anda, pilihan terbaik untuk tempat tinggal keluarga mu.
                </p>
            </div>

            {/* Beli Rumah Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center min-w-[300px] hover:bg-gradient-to-r hover:from-[#00985B] hover:to-[#000000] transition-all duration-300 hover:text-white cursor-pointer">
                <Image src="/images/beli-rumah-icon.png" alt="Beli Rumah Icon" width={80} height={80} />
                <h3 className="text-2xl font-bold text-green-700 mt-4 transition-colors duration-300">Beli Rumah</h3>
                <p className="text-gray-600 mt-2 text-center transition-colors duration-300">
                    Beli Rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya.
                </p>
            </div>
        </div>
    </div>
    );
}
