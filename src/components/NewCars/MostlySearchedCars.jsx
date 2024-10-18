import carImage2 from '/public/images/sample-car2.png';
import carImage3 from '/public/images/sample-car3.png';
import Image from "next/image";

const MostlySearchedCars = () => {
    // Sample array of car types for filter tabs
    const carTypes1 = ["Sedan", "SUV", "Hatchback", "Coupe"];
    const mostlySearchedCars = [
        {
            imageSrc: carImage2,
            name: "Car name",
            details: "Sedan | 2000 CC | 250 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage3,
            name: "Car name",
            details: "SUV | 2500 CC | 300 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage2,
            name: "Car name",
            details: "Hatchback | 1200 CC | 150 BHP | Manual",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage3,
            name: "Car name",
            details: "Coupe | 3000 CC | 350 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage2,
            name: "Car name",
            details: "Sedan | 2000 CC | 250 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage3,
            name: "Car name",
            details: "SUV | 2500 CC | 300 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage2,
            name: "Car name",
            details: "Hatchback | 1200 CC | 150 BHP | Manual",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage3,
            name: "Car name",
            details: "Coupe | 3000 CC | 350 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage2,
            name: "Car name",
            details: "Sedan | 2000 CC | 250 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage3,
            name: "Car name",
            details: "SUV | 2500 CC | 300 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage2,
            name: "Car name",
            details: "Hatchback | 1200 CC | 150 BHP | Manual",
            price: "Rs. xx Lakh",
        },
        {
            imageSrc: carImage3,
            name: "Car name",
            details: "Coupe | 3000 CC | 350 BHP | Automatic",
            price: "Rs. xx Lakh",
        },
        // Add more car objects as needed...
    ];

    return (
        <div className="w-full mb-10 ">
            {/* Title Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
                    Mostly searched <span className="text-red-500">Cars</span>
                </h2>
            </div>

            {/* Car Types Tabs Section */}
            <div className="flex space-x-6 mb-8">
                {carTypes1.map((type, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-300 transition duration-300`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Cars Horizontal Scroll Section */}
            <div className="overflow-x-auto w-full scrollbar-hide">
                <section className="flex space-x-4">
                    {mostlySearchedCars.map((car, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] bg-white text-black rounded-lg shadow-md overflow-hidden cursor-pointer mb-5"
                        >
                            {/* Car Image */}
                            <Image
                                src={car.imageSrc}
                                alt={car.name}
                                width={400}
                                height={200}
                                className="w-full object-cover"
                            />
                            {/* Car Details */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{car.name}</h3>
                                <p className="text-sm text-gray-700 mb-4">{car.details}</p>
                                <p className="text-lg text-red-500 font-bold">{car.price}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default MostlySearchedCars;
