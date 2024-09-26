import hippoLogoGray from "../../assets/images/hippoLogoGray.png";

function Footer() {
  return (
    <footer className="section bg-gray-100 py-8 mt-8">
      <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row justify-between my-10 px-4">
        <div className="mb-6 md:mb-0">
          {/* Logo and Copyright */}
          <img src={hippoLogoGray} className="h-[40px]" alt="HippoCreates Logo" />
          <p className="text-sm text-gray-700 font-medium mt-2">© 2024 HippoCreates. All rights reserved.</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-gray-700">Contact Us</h3>
          <p className="text-sm text-gray-700 font-medium">Email: support@hippocreates.com</p>
          <p className="text-sm text-gray-700 font-medium">Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-700">Follow Us</h3>
          <p className="text-sm text-gray-700 font-medium">Facebook | Twitter | Instagram</p>
        </div>
      </div>

      <div className="mt-6 w-full px-4">
        <div className="w-full flex flex-col md:flex-row sm:flex-col lg:flex-row  justify-start sm:justify-start md:justify-center lg:justify-center space-x-0 lg:space-x-4 md:space-x-4 text-gray-700 font-medium">
          <a href="#" className="text-gray-600 inline-block">Privacy Policy</a>
          <a href="#" className="text-gray-600 inline-block">Terms of Service</a>
          <a href="#" className="text-gray-600 inline-block">Legal</a>
          <a href="#" className="text-gray-600 inline-block">Blog</a>
          <a href="#" className="text-gray-600 inline-block">Affiliate Program</a>
        </div>

        <p className="mt-4 text-gray-700 font-medium text-start sm:text-center md:text-center lg:text-center">
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
