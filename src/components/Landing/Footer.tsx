// import React from "react";

function Footer() {
  return (
    <footer className="section bg-gray-100 py-8 mt-8">
      <div className="w-2/3 mx-auto flex justify-between my-10">
        <div>
          <h3 className="text-lg text-gray-700  font-bold">HippoCreates</h3>
          <p className="text-sm text-gray-700 font-medium">© 2024 HippoCreates. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-700 ">Contact Us</h3>
          <p className="text-sm text-gray-700 font-medium">Email: support@hippocreates.com</p>
          <p className="text-sm text-gray-700 font-medium">Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-700 ">Follow Us</h3>
          <p className="text-sm text-gray-700 font-medium">Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-center space-x-4 text-gray-700 font-medium">
          <a href="#" className="text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600">
            Legal
          </a>
          <a href="#" className="text-gray-600">
            Blog
          </a>
          <a href="#" className="text-gray-600">
            Affiliate Program
          </a>
        </div>
        <p className="mt-4 text-gray-700 font-medium">
          © 2023 InkDesk, Inc. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-700">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-700">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-700">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
