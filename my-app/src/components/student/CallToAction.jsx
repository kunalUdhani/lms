import React from 'react'

const CallToAction = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Learn anything, anytime, anywhere
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-lg">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
          anim id veniam aliqua proident excepteur commodo do ea.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition">
            Get started
          </button>

          <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition">
            Learn more
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
