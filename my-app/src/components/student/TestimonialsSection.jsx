import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      
      <h2 className="text-3xl font-bold text-center">Testimonials</h2>
      <p className="text-gray-500 text-center max-w-3xl mx-auto mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {dummyTestimonial.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            
            <div className="flex items-center gap-4 p-4 bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            
            <div className="p-4">
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < Math.floor(item.rating) ? assets.star : assets.star_blank}
                    className="h-4"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.feedback}
              </p>

              <button className="text-blue-600 text-sm mt-4">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
