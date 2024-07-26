// import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="w-2/3 mx-auto flex justify-between my-10">
        <div>
          <h3 className="text-lg font-bold">HippoCreates</h3>
          <p className="text-sm">© 2024 HippoCreates. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="text-sm">Email: support@hippocreates.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <p className="text-sm">Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-center space-x-4">
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
        <p className="mt-4 text-gray-600">
          © 2023 InkDesk, Inc. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
