
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold mb-4">Support</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:underline">Help Center</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">AirCover</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Anti-discrimination</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Disability support</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Cancellation options</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Report neighborhood concern</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Hosting</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:underline">Airbnb your home</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">AirCover for Hosts</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Hosting resources</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Community forum</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Hosting responsibly</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Airbnb</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:underline">Newsroom</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">New features</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
                        <li><a href="#" className-="text-gray-600 hover:underline">Investors</a></li>
                        <li><a href="#" className="text-gray-600 hover:underline">Gift cards</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t pt-4 text-center text-gray-600">
                <p>&copy; 2025 Airbnb, Inc. &middot; <a href="#">Terms</a> &middot; <a href="#">Sitemap</a> &middot; <a href="#">Privacy</a></p>
            </div>
        </footer>
    );
};

export default Footer;
