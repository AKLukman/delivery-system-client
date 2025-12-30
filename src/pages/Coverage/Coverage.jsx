// src/pages/Coverage.jsx
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions( {
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
} );

const districts = [
    { name: "Dhaka", lat: 23.8103, lng: 90.4125 },
    { name: "Chattogram", lat: 22.3569, lng: 91.7832 },
    { name: "Sylhet", lat: 24.8949, lng: 91.8687 },
    { name: "Rajshahi", lat: 24.3636, lng: 88.6241 },
    { name: "Khulna", lat: 22.8456, lng: 89.5403 },
    { name: "Barishal", lat: 22.7010, lng: 90.3535 },
    { name: "Rangpur", lat: 25.7439, lng: 89.2752 },
    { name: "Mymensingh", lat: 24.7471, lng: 90.4203 },

];

const Coverage = () => {
    const [ search, setSearch ] = useState( "" );

    const filteredDistricts = districts.filter( ( d ) =>
        d.name.toLowerCase().includes( search.toLowerCase() )
    );

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3">
                        We Are Available in 64 Districts
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Search your district and check our delivery coverage across Bangladesh.
                    </p>
                </div>

                {/* Search Box */}
                <div className="max-w-md mx-auto mb-8">
                    <input
                        type="text"
                        placeholder="Search district..."
                        className="input input-bordered w-full"
                        value={search}
                        onChange={( e ) => setSearch( e.target.value )}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* District List */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Available Districts</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {filteredDistricts.map( ( district, index ) => (
                                <div
                                    key={index}
                                    className="badge badge-outline py-3 justify-center"
                                >
                                    {district.name}
                                </div>
                            ) )}
                        </div>

                        {filteredDistricts.length === 0 && (
                            <p className="text-gray-500 mt-4">No district found.</p>
                        )}
                    </div>

                    {/* Map */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <MapContainer
                            center={[ 23.685, 90.3563 ]} // Bangladesh center
                            zoom={7}
                            scrollWheelZoom={false}
                            className="h-[400px] w-full rounded-lg"
                        >
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {filteredDistricts.map( ( district, index ) => (
                                <Marker
                                    key={index}
                                    position={[ district.lat, district.lng ]}
                                >
                                    <Popup>{district.name}</Popup>
                                </Marker>
                            ) )}
                        </MapContainer>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Coverage;
