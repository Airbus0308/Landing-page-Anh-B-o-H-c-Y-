import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const quotes = [
  { text: "Thiên tài chỉ có 1% là năng khiếu bẩm sinh, còn 99% là do sự khổ luyện.", author: "Thomas Edison" },
  { text: "Trên bước đường thành công, không có dấu chân của kẻ lười biếng.", author: "Lỗ Tấn" },
  { text: "Nghị lực và sự kiên trì sẽ chiến thắng tất cả mọi thứ.", author: "Benjamin Franklin" },
  { text: "Đừng xấu hổ khi không biết, chỉ xấu hổ khi không học.", author: "Ngạn ngữ Nga" },
  { text: "Đừng đợi đến ngày mai những việc gì bạn có thể làm hôm nay.", author: "Lord Chesterfield" },
  { text: "Cách tốt nhất để dự đoán tương lai là hãy tự tạo ra nó.", author: "Abraham Lincoln" },
  { text: "Nếu bạn nghỉ ngơi lúc này, bạn sẽ phải chạy vào ngày mai.", author: "Ngạn ngữ Anh" },
  { text: "Thành công không phải là chìa khóa mở cửa hạnh phúc. Hạnh phúc mới là chìa khóa dẫn tới thành công. Nếu bạn yêu điều bạn đang làm, bạn sẽ thành công.", author: "Albert Schweitzer" },
];

export function InspirationalQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Star className="w-12 h-12 mx-auto mb-4 text-white" />
          </div>
          
          <div className="min-h-[180px] flex flex-col justify-center items-center mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic mb-4">
                  "{quotes[index].text}"
                </p>
                <p className="text-lg md:text-xl font-semibold opacity-90">
                  – {quotes[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            data-tally-open="7RWzMz"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            Bắt đầu bứt phá ngay
          </button>
        </div>
      </div>
    </section>
  );
}
