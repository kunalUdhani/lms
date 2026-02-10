import { assets } from "../../assets/assets";

const TrustedBy = () => {
  return (
    <section className="text-center mt-16">
      <p className="text-gray-500 mb-6">Trusted by learners from</p>

      <div className="flex justify-center gap-10 flex-wrap items-center">
        <img src={assets.microsoft_logo} alt="Microsoft" className="h-7" />
        <img src={assets.walmart_logo} alt="Walmart" className="h-7" />
        <img src={assets.accenture_logo} alt="Accenture" className="h-7" />
        <img src={assets.adobe_logo} alt="Adobe" className="h-7" />
        <img src={assets.paypal_logo} alt="PayPal" className="h-7" />
      </div>
    </section>
  );
};

export default TrustedBy;
