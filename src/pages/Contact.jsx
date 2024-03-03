const Contact = () => {
    // Email address of the company
    const emailAddress = 'nakshatra.aich2021@vitstudent.ac.in'; // Replace with your company's email address

    // Function to handle clicking on the Email icon
    const handleEmailClick = () => {
      const subject = 'Inquiry'; // Subject of the email
      const body = 'Dear ..., \n\n'; // Body of the email (you can customize it as needed)
      
      // Open Gmail with a new email drafting window
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    };
  
    
    // Phone number of the company
    const phoneNumber = '919930376620'; // Replace with your company's phone number

    // Function to handle clicking on the WhatsApp icon
    const handleWhatsAppClick = () => {
        window.open(`whatsapp://send?phone=${phoneNumber}`, '_blank');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Your Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email address</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                        <div className="flex">
                            <input type="text" id="countryCode" name="countryCode" placeholder="Country Code" className="mt-1 p-2 border border-gray-300 rounded-l-md w-1/4" />
                            <input type="tel" id="phone" name="phone" pattern="[0-9]*" placeholder="Phone Number" className="mt-1 p-2 border border-gray-300 rounded-r-md w-3/4" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Subject</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
                    </div>
                    <div className="mb-4 flex items-center">
                        <span className="block text-gray-700 mr-2">Contact us via Email:</span>
                        <button type="button" onClick={handleEmailClick}>
                            <img src="email_icon.png" alt="Email" className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="mb-4 flex items-center">
                        <span className="block text-gray-700 mr-2">Contact us via WhatsApp:</span>
                        <button type="button" onClick={handleWhatsAppClick}>
                            <img src="whatsapp_icon.png" alt="WhatsApp" className="w-8 h-8" />
                        </button>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
