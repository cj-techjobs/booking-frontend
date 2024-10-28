import Image from 'next/image';

export default function Advertisement() {
    return (
        <div className="relative mt-16 w-full px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center bg-gradient-to-r from-[#048853] to-[#000000] rounded-lg py-12">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src="/images/decorative-dots.png" alt="Decorative Dots" layout="fill" objectFit="contain" className="opacity-50" />
            </div>
            <div className="flex-1 text-white text-center md:text-left mb-8 md:mb-0 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Advertisement</h2>
                <p className="text-lg md:text-xl">
                    Rumah Impian hadir untuk temukan rumah terbaik untukmu, untuk di jual ataupun di sewa dengan sumber terpercaya.
                </p>
            </div>
            <div className="flex-1 flex justify-end items-end relative z-10">
                <Image src="/images/house-advertisement.png" alt="House Advertisement" width={700} height={500} className="rounded-lg shadow-lg" />
            </div>
        </div>
    );
}
