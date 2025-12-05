'use client'


export default function LocationPage() {
    return (
        <div>

            <div className="px-6  bg-white rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">
                    Our Location
                </h2>

                <p className="text-center text-lg mb-4 text-gray-700">
                    Station Road, Mirganj, Bihar – 841238
                </p>

                <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg border">
                    <iframe
                        src="https://www.google.com/maps?q=Station+Road,+Mirganj,+Bihar+841238&output=embed"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </div>
    );
}
