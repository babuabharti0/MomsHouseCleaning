import { FcRating, FcApproval } from 'react-icons/fc';

const reviews = [
  {
    name: 'John D.',
    location: 'San Antonio, TX',
    text: 'I have used several cleaning services over the years, but Mom\'s is by far the best. They are thorough, professional, and I love that they use green products. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Kennedy M.',
    location: 'Alamo Heights, TX',
    text: 'The team did an incredible job on our move-out clean. We got our full deposit back. The apartment smelled so fresh and looked better than when we moved in.',
    rating: 5,
  },
  {
    name: 'Rico T.',
    location: 'Stone Oak, TX',
    text: 'Reliable and consistent. It is so nice coming home on Fridays to a perfectly clean house. The staff is friendly and always pays attention to the little details.',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    location: 'Boerne, TX',
    text: 'I love that they are W-2 employees. It gives me peace of mind knowing the company takes care of their staff, and it shows in the quality of their work. Fantastic service.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-dark text-white" id="reviews">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Don't Just Take Our Word For It.
          </h2>
          <p className="text-lg text-blue-tint font-medium">
            Hundreds of San Antonio families trust us with their homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-2xl border border-blue-base/30 backdrop-blur-sm flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <FcRating key={j} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-white/90 flex-grow mb-6 font-medium">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-blue-base/30 pt-4 mt-auto">
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-blue-tint/70">{review.location}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-pink-base bg-pink-base/20 px-2 py-1 rounded-full font-bold">
                  <FcApproval className="w-3 h-3" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#book" className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-pink-base text-pink-base font-bold hover:bg-pink-base hover:text-blue-dark transition-colors">
            Experience It Yourself
          </a>
        </div>
      </div>
    </section>
  );
}
