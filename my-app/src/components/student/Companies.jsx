import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <section className="py-14">
      <p className="text-center text-gray-500 mb-8">
        Trusted by learners from
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        <img src={assets.microsoft_logo} alt="Microsoft" className="h-8" />
        <img src={assets.walmart_logo} alt="Walmart" className="h-8" />
        <img src={assets.accenture_logo} alt="Accenture" className="h-8" />
        <img src={assets.adobe_logo} alt="Adobe" className="h-8" />
        <img src={assets.paypal_logo} alt="PayPal" className="h-8" />
      </div>
    </section>
  );
};

export default Companies;
