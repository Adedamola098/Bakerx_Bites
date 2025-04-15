import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', comment: '', rating: 5 });

  // Load from localStorage on mount
  useEffect(() => {
    const storedReviews = localStorage.getItem('customerReviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      const initialReviews = [
        {
          name: 'Joy A.',
          rating: 5,
          comment: 'Absolutely love the pastries! Super fresh and tasty.',
        },
        {
          name: 'Samuel K.',
          rating: 4,
          comment: 'Great variety and lovely packaging. Will order again!',
        },
      ];
      setReviews(initialReviews);
      localStorage.setItem('customerReviews', JSON.stringify(initialReviews));
    }
  }, []);

  // Save to localStorage when reviews change
  useEffect(() => {
    localStorage.setItem('customerReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.comment) {
      const newReview = { ...form };
      setReviews([...reviews, newReview]);
      setForm({ name: '', comment: '', rating: 5 });
    }
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-yellow-600 text-center mb-3">💬 Customer Reviews</h2>

      {/* ⭐ Average Rating */}
      <div className="flex justify-center items-center gap-2 mb-10">
        <div className="flex gap-1 text-yellow-500">
          {Array.from({ length: Math.round(averageRating) }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-700 font-medium">({averageRating.toFixed(1)} / 5 based on {reviews.length} reviews)</p>
      </div>

      {/* 📝 Review Form */}
      <div className="bg-yellow-50 p-6 rounded-xl shadow-lg max-w-xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
          <textarea
            placeholder="Your Comment"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            rows={4}
            required
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Rating:</label>
            <select
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
              className="p-2 border rounded-md focus:ring-yellow-300"
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>{star} Star{star > 1 && 's'}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* 🧍🏽‍♂️ Reviews List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-yellow-100 p-5 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-bold text-yellow-800">{review.name}</h4>
              <div className="flex gap-1 text-yellow-600">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic">“{review.comment}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerReviews;
