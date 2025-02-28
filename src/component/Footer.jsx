
export const Footer = () => {
  return (
    <div>
        <footer className="bg-[#5D4037] font-[Roboto] text-white p-6 mt-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex justify-center md:justify-start">
          <img
            src="src/assets/images/Bakereies_Logo-removebg-preview.png"
            alt="Sweet Dessert House Cake"
            className="w-full max-w-[250px]"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold underline">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Order Now</li>
            <li>Testimonials</li>
            <li>Feedback</li>
            <li>Our Tale</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold underline">OUR VENUE</h3>
          <p>New No: 22, Old No: 40, 3rd Street, East ABC, XYZ, Chennai</p>
          <p>9123456789</p>
          <p>sweetcakebakers@gmail.com</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
           <img src="" alt="" />
           <img src="" alt="" />
           <img src="" alt="" />
           <img src="" alt="" />
           <img src="" alt="" />
          </div>
        </div>
      </div>

      <p className="text-center mt-4">
        Copyright 2024 MN Organic India Pvt. Ltd.
      </p>
    </footer>
    </div>
  )
}
