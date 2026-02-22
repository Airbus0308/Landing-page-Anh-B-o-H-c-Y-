import { useState, useEffect } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Target,
  Users,
  TrendingUp,
  FileText,
  MessageCircle,
  Shield,
  ChevronDown,
  MessageSquare,
  Send,
  Zap,
  Award,
  Brain,
  Star,
  Trophy,
  Facebook,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

import { InspirationalQuote } from "./components/InspirationalQuote";

// Import images
const instructorImage = "/instructor.png";
const heroImage = "/hero.png";

export default function App() {
  const [openFaq, setOpenFaq] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";
    // 1. Kiểm tra xem script đã tồn tại chưa để tránh trùng lặp
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Nếu Tally đã load từ trước, gọi hàm này để quét lại các nút bấm mới
    // @ts-ignore
    if (typeof window !== "undefined" && window.Tally) {
      // @ts-ignore
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://www.facebook.com/tran.gia.bao.163839"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] hover:bg-[#166fe5] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110">
          <MessageSquare className="w-6 h-6" />
        </button>
        <button className="bg-[#0068FF] hover:bg-[#0052CC] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110">
          <Send className="w-6 h-6" />
        </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-6">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="uppercase tracking-wide">
                      Chỉ còn 90 ngày
                    </span>
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  Tăng Tốc Nước Rút 90 Ngày Cuối - Chinh Phục Kỳ
                  Thi THPT Quốc Gia
                </h1>

                <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                  Hệ thống lại toàn bộ kiến thức trọng tâm (Toán
                  - Hóa - Sinh), nắm chắc phương pháp giải
                  nhanh, bứt phá điểm số 8+ và đỗ vào trường Đại
                  học Y Dược hoặc ngôi trường mơ ước của bạn.
                </p>

                <button
                  data-tally-open="7RWzMz"
                  data-tally-layout="modal"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  Đăng ký ngay để giữ chỗ
                </button>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Học sinh đang học"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <span>Điểm 8+ Khả thi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK BENEFITS SUMMARY */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Target className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-center md:text-left mb-3">
                Lộ trình cá nhân hóa 90 ngày
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Kế hoạch học tập chi tiết từng tuần, phù hợp với
                trình độ hiện tại của bạn
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-center md:text-left mb-3">
                Luyện đề sát cấu trúc minh họa
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Bộ đề thi thử độc quyền được thiết kế dựa trên
                đề minh họa chính thức
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <MessageCircle className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-center md:text-left mb-3">
                Hỗ trợ giải đáp thắc mắc 24/7
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Group học tập sôi động, giáo viên giải đáp mọi
                thắc mắc trong vòng 2 giờ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSPIRATIONAL QUOTE */}
      <InspirationalQuote />

      {/* 4. WHAT YOU'LL LEARN */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Bạn sẽ học được gì
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">
                    Tổng ôn kiến thức lõi
                  </h4>
                  <p className="text-gray-600">
                    Tổng ôn toàn bộ kiến thức lõi lớp 12 và các
                    phần liên quan lớp 11
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">
                    Kỹ năng giải trắc nghiệm siêu tốc
                  </h4>
                  <p className="text-gray-600">
                    Kỹ năng giải trắc nghiệm siêu tốc, tối ưu
                    thao tác máy tính Casio
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">
                    Chiến thuật phân bổ thời gian
                  </h4>
                  <p className="text-gray-600">
                    Chiến thuật phân bổ thời gian trong phòng
                    thi để đạt điểm tối đa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">
                    Tránh bẫy và không mất điểm oan
                  </h4>
                  <p className="text-gray-600">
                    Cách nhận diện và tránh các "bẫy" thường gặp
                    để không mất điểm oan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO IS THIS FOR */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">
              Lộ trình này dành cho những bạn…
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Đang hoang mang, kiến thức rời rạc
                    </h4>
                    <p className="text-gray-600">
                      Chưa biết bắt đầu ôn từ đâu, cần một lộ
                      trình rõ ràng và khoa học
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Muốn bứt phá điểm số
                    </h4>
                    <p className="text-gray-600">
                      Muốn bứt phá từ mức điểm trung bình (5-6)
                      lên mức Khá/Giỏi (8+)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Cần người đồng hành sát sao
                    </h4>
                    <p className="text-gray-600">
                      Cần một môi trường kỷ luật và người đồng
                      hành sát sao trong quá trình học
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">Tối ưu điểm khối B</h4>
                    <p className="text-gray-600">
                      Muốn tối ưu hóa điểm số các môn khối B
                      (Toán, Hóa, Sinh) để xét tuyển
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COURSE BENEFITS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">
              Quyền lợi khóa học
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Hệ thống bài giảng tổng ôn chi tiết
                    </h4>
                    <p className="text-gray-600">
                      Video bài giảng chất lượng cao, dễ hiểu,
                      đi thẳng vào trọng tâm
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Ngân hàng đề thi thử độc quyền
                    </h4>
                    <p className="text-gray-600">
                      Hơn 50 đề thi thử chất lượng cao + chấm
                      chữa cặn kẽ từng bài
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Group hỗ trợ học tập
                    </h4>
                    <p className="text-gray-600">
                      Cộng đồng học tập sôi động, giải bài tập
                      và chia sẻ kinh nghiệm hàng ngày
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Bonus: Bộ tài liệu PDF
                    </h4>
                    <p className="text-gray-600">
                      Tóm tắt công thức và sơ đồ tư duy (Toán -
                      Hóa - Sinh) để ôn tập nhanh
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1649929640997-cce847b8d098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjBtYXRlcmlhbHMlMjBpcGFkJTIwbW9ja3VwfGVufDF8fHx8MTc3MTcyODk3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Tài liệu học tập"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSTRUCTOR BIO */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Về người hướng dẫn
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src={instructorImage}
                    alt="Trần Gia Bảo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="mb-2">Trần Gia Bảo</h3>
                  <p className="text-orange-600 mb-4 font-semibold">
                    Sinh viên năm 5 Chuyên ngành Y Đa khoa - ĐH
                    Y Dược TP.HCM
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-gray-800 font-bold flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      Thành tích nổi bật:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Tổng điểm khối B00:{" "}
                          <strong className="text-blue-700">
                            28.5
                          </strong>{" "}
                          (Toán 9 - Hóa 9.5 - Sinh 9.75)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Giải Nhì học sinh giỏi Sinh học cấp
                          Thành phố
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Thành viên ội tuyển HSG giải Toán &
                          Hóa trên máy tính cầm tay
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    Không chỉ dạy kiến thức, anh đóng vai trò là
                    một người Mentor (người đồng hành) giúp các
                    bạn xây dựng lộ trình cá nhân hóa, vực dậy
                    tinh thần và chiến thuật làm bài thi trắc
                    nghiệm đỉnh cao.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      200+ học sinh đỗ ĐH
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      5+ năm kinh nghiệm
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Mentor tâm huyết
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4">
              Chọn gói học phù hợp
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Đầu tư cho tương lai, bứt phá trong 90 ngày
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* VIP Package */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-orange-900 px-4 py-1 rounded-full text-sm">
                  Được chọn nhiều nhất
                </div>
                <h3 className="text-center mb-2">GÓI VIP</h3>
                <p className="text-center text-orange-100 mb-6">
                  Học + Luyện đề + Chữa 1:1
                </p>
                <div className="text-center mb-6">
                  <span className="text-5xl">2.999.000</span>
                  <span className="text-xl ml-2">VNĐ</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>
                      Đầy đủ bài giảng tổng ôn chi tiết
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Bộ đề thi thử độc quyền</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Group hỗ trợ 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>
                      Chữa bài cá nhân hóa 1:1 mỗi tuần
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Tư vấn chiến lược thi cử riêng</span>
                  </li>
                </ul>
                <button
                  data-tally-open="7RWzMz"
                  data-tally-layout="modal"
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 py-4 rounded-lg transition-colors"
                >
                  Chọn gói này
                </button>
              </div>

              {/* Standard Package */}
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-center mb-2">
                  GÓI TIÊU CHUẨN
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  Học + Luyện đề
                </p>
                <div className="text-center mb-6">
                  <span className="text-5xl text-blue-700">
                    1.899.000
                  </span>
                  <span className="text-xl text-gray-600 ml-2">
                    VNĐ
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                    <span className="text-gray-700">
                      Đầy đủ bài giảng tổng ôn chi tiết
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                    <span className="text-gray-700">
                      Bộ đề thi thử độc quyền
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                    <span className="text-gray-700">
                      Group hỗ trợ 24/7
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                    <span className="text-gray-700">
                      Tài liệu PDF tóm tắt công thức
                    </span>
                  </li>
                  <li className="flex items-start gap-2 opacity-40">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                    <span className="text-gray-400">
                      Không bao gồm chữa bài 1:1
                    </span>
                  </li>
                </ul>
                <button
                  data-tally-open="7RWzMz"
                  data-tally-layout="modal"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 py-4 rounded-lg transition-colors"
                >
                  Chọn gói này
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/20 p-4 rounded-full mb-4">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="mb-4">Cam kết hoàn tiền 100%</h3>
            <p className="text-lg text-blue-100">
              Nếu bạn cảm thấy phương pháp học không phù hợp
              trong tuần đầu tiên, chúng tôi sẽ hoàn lại 100%
              học phí. Không hỏi, không giữ lại. Vì chúng tôi
              tin vào chất lượng của khóa học.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">
              Câu hỏi thường gặp
            </h2>

            <Accordion
              type="single"
              collapsible
              value={openFaq}
              onValueChange={setOpenFaq}
            >
              <AccordionItem
                value="item-1"
                className="bg-white rounded-lg mb-4 px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span>
                    Khóa học có dạy lại từ đầu cho người mất gốc
                    không?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Có. Khóa học được thiết kế để phù hợp với cả
                  học sinh mất gốc và học sinh đã có nền tảng.
                  Chúng tôi sẽ bắt đầu từ những kiến thức cơ bản
                  nhất, sau đó dần dần nâng cao. Mỗi bài giảng
                  đều có phần ôn tập kiến thức nền trước khi đi
                  vào phần chính.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-lg mb-4 px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span>
                    Em học yếu môn Hóa/Sinh thì có theo kịp tiến
                    độ 90 ngày không?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Hoàn toàn có thể. Lộ trình 90 ngày được thiết
                  kế linh hoạt với 3 mức độ: Cơ bản - Trung bình
                  - Nâng cao. Bạn sẽ được đánh giá đầu vào để
                  xác định điểm xuất phát, sau đó có kế hoạch
                  học tập riêng phù hợp. Với sự hỗ trợ từ group
                  và giáo viên, bạn hoàn toàn có thể bứt phá.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-lg mb-4 px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span>
                    Hình thức học và luyện đề diễn ra như thế
                    nào?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Học online hoàn toàn qua video bài giảng được
                  quay sẵn chất lượng cao. Bạn có thể học bất cứ
                  lúc nào, ở đâu, với tốc độ riêng của mình.
                  Luyện đề được tổ chức theo tuần với đề thi thử
                  online, sau đó có buổi chữa đề chi tiết. Gói
                  VIP sẽ có thêm phần chữa bài riêng 1:1 qua
                  Zoom/Google Meet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-lg mb-4 px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span>
                    Có được làm bài thi thử đánh giá năng lực
                    định kỳ không?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Có. Chúng tôi tổ chức thi thử định kỳ mỗi 2
                  tuần một lần với đề thi được thiết kế sát với
                  cấu trúc đề minh họa chính thức. Sau mỗi bài
                  thi, bạn sẽ nhận được báo cáo chi tiết về điểm
                  số, phân tích điểm mạnh/yếu, và lộ trình cải
                  thiện cụ thể. Điều này giúp bạn theo dõi tiến
                  độ và điều chỉnh kế hoạch học tập kịp thời.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-white mb-4">
                  Khóa học Tăng Tốc 90 Ngày
                </h3>
                <p className="text-gray-400 mb-4">
                  Đồng hành cùng các sĩ tử trên con đường chinh
                  phục kỳ thi THPT Quốc gia
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white mb-4">Liên kết</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Khóa học
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Học viên
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white mb-4">Chính sách</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Điều khoản sử dụng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Chính sách hoàn tiền
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p>
                &copy; 2026 Khóa học Tăng Tốc 90 Ngày. Tất cả
                các quyền được bảo lưu.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}