import Head from "next/head";
import Image from "next/image";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-6 tracking-tight">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
    {children}
  </p>
);

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:from-yellow-200 group-hover:to-amber-200 transition-all duration-300">
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Realestate - Web3 Real Estate Platform</title>
        <meta
          name="description"
          content="Dan Realestate brings Web3 technology to the real estate market, creating a transparent, secure, and decentralized platform for property transactions using DAN TOKEN."
        />
      </Head>
      <div
        className="min-h-screen bg-white text-gray-800"
        style={{ fontFamily: "prompt, Arial, Helvetica, sans-serif" }}
      >
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-gradient-to-r from-yellow-200/30 to-amber-200/30 opacity-60 blur-[80px]"></div>
        </div>

        <main>
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24 pb-16 overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                alt="Luxury House Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 mb-4 tracking-tight drop-shadow-lg">
                DAN REAL ESTATE
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-8 drop-shadow-lg">
                โปรเจค ซื้อ - ขาย โครงการ บ้าน ที่ดิน คอนโด ด้วย DAN TOKEN 100%
              </h2>
              <a
                href="#about"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-24 bg-gradient-to-br from-white to-yellow-50"
          >
            <div className="max-w-4xl mx-auto px-6 text-center">
              <SectionTitle>Real Estate Web3 คือ</SectionTitle>
              <SectionSubtitle>
                การนำแนวคิดและเทคโนโลยีของ Web3 หรืออินเทอร์เน็ตยุคใหม่
                ที่เน้นการกระจายศูนย์ (Decentralization) และใช้เทคโนโลยีบล็อกเชน
                มาประยุกต์ใช้กับอสังหาริมทรัพย์ เพื่อสร้างระบบที่เป็นอิสระ
                โปร่งใส
                และให้ผู้ใช้งานควบคุมข้อมูลและทรัพย์สินของตนเองได้มากขึ้น
                โดยใช้สินทรัพย์ดิจิทัลอย่าง NFT เพื่อเป็นเจ้าของทรัพย์สิน, ใช้
                Smart Contracts เพื่อทำธุรกรรมโดยอัตโนมัติ
                และกระจายอำนาจการตัดสินใจในโครงการอสังหาฯ ไปสู่ชุมชนผู้ใช้งาน
              </SectionSubtitle>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <SectionTitle>องค์ประกอบหลักของ Real Estate Web3</SectionTitle>
              <SectionSubtitle>
                เทคโนโลยีที่เป็นรากฐานสำคัญของแพลตฟอร์ม Dan Realestate
              </SectionSubtitle>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Blockchain */}
                <div className="group bg-gradient-to-br from-white to-yellow-50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8 4"
                      />
                    </svg>
                  </FeatureIcon>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Blockchain
                  </h3>
                  <p className="text-sm text-gray-600">
                    จัดเก็บข้อมูลธุรกรรมอย่างปลอดภัยและโปร่งใส
                  </p>
                </div>
                {/* Decentralization */}
                <div className="group bg-gradient-to-br from-white to-yellow-50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </FeatureIcon>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Decentralization
                  </h3>
                  <p className="text-sm text-gray-600">
                    ลดการควบคุมจากส่วนกลาง ให้ผู้ใช้มีส่วนร่วม
                  </p>
                </div>
                {/* NFTs */}
                <div className="group bg-gradient-to-br from-white to-yellow-50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v11.494m-5.45-6.894l10.9 6.3M2.75 9.342l10.9 6.3M12 21.747L2.75 15.405m9.25 6.342l9.25-6.342M2.75 9.342L12 3.253m0 18.494L21.25 15.405"
                      />
                    </svg>
                  </FeatureIcon>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    NFTs
                  </h3>
                  <p className="text-sm text-gray-600">
                    เป็นตัวแทนความเป็นเจ้าของทรัพย์สินในโลกดิจิทัล
                  </p>
                </div>
                {/* DAPPs */}
                <div className="group bg-gradient-to-br from-white to-yellow-50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </FeatureIcon>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    DAPPs
                  </h3>
                  <p className="text-sm text-gray-600">
                    แอปพลิเคชันที่ทำงานบนบล็อกเชนเพื่อธุรกรรมที่ไร้รอยต่อ
                  </p>
                </div>
                {/* Smart Contracts */}
                <div className="group bg-gradient-to-br from-white to-yellow-50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </FeatureIcon>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Smart Contracts
                  </h3>
                  <p className="text-sm text-gray-600">
                    สัญญาอัจฉริยะที่ดำเนินการอัตโนมัติตามเงื่อนไข
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section
            id="benefits"
            className="py-24 bg-gradient-to-br from-yellow-50 to-white"
          >
            <div className="max-w-7xl mx-auto px-6 text-center">
              <SectionTitle>ประโยชน์ของ Real Estate Web3</SectionTitle>
              <SectionSubtitle>
                ปลดล็อกศักยภาพใหม่ๆ ในการลงทุนอสังหาริมทรัพย์
              </SectionSubtitle>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Clear Ownership */}
                <div className="group flex items-start text-left space-x-4 p-6 rounded-2xl transition-all duration-300 hover:bg-yellow-50/60">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z"
                      />
                    </svg>
                  </FeatureIcon>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      ความเป็นเจ้าของที่ชัดเจน
                    </h3>
                    <p className="text-sm text-gray-600">
                      สิทธิ์ในทรัพย์สินดิจิทัลที่แสดงถึงทรัพย์สินจริง
                    </p>
                  </div>
                </div>
                {/* Transparency */}
                <div className="group flex items-start text-left space-x-4 p-6 rounded-2xl transition-all duration-300 hover:bg-yellow-50/60">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </FeatureIcon>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      ความโปร่งใส
                    </h3>
                    <p className="text-sm text-gray-600">
                      ทุกธุรกรรมถูกบันทึกและตรวจสอบได้บนบล็อกเชน
                    </p>
                  </div>
                </div>
                {/* Lower Costs */}
                <div className="group flex items-start text-left space-x-4 p-6 rounded-2xl transition-all duration-300 hover:bg-yellow-50/60">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1m-4 10v1h4v-1m-4-10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </FeatureIcon>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      ลดต้นทุนและตัวกลาง
                    </h3>
                    <p className="text-sm text-gray-600">
                      ธุรกรรม Peer-to-Peer ช่วยลดค่าใช้จ่ายที่ไม่จำเป็น
                    </p>
                  </div>
                </div>
                {/* Global Access */}
                <div className="group flex items-start text-left space-x-4 p-6 rounded-2xl transition-all duration-300 hover:bg-yellow-50/60">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 16.95l.005.005M11.2 16.95l.005.005M14.7 16.95l.005.005M6 11a6 6 0 1112 0 6 6 0 01-12 0z"
                      />
                    </svg>
                  </FeatureIcon>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      เข้าถึงได้ทั่วโลก
                    </h3>
                    <p className="text-sm text-gray-600">
                      เปิดโอกาสให้นักลงทุนจากทั่วโลกซื้อขายได้ง่ายขึ้น
                    </p>
                  </div>
                </div>
                {/* Alternative Fundraising */}
                <div className="group flex items-start text-left space-x-4 p-6 rounded-2xl transition-all duration-300 hover:bg-yellow-50/60">
                  <FeatureIcon>
                    <svg
                      className="w-8 h-8 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </FeatureIcon>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      การระดมทุนทางเลือก
                    </h3>
                    <p className="text-sm text-gray-600">
                      ระดมทุนผ่านการออกโทเคนดิจิทัลหรือ NFT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <SectionTitle>โครงการของเรา</SectionTitle>
              <SectionSubtitle>
                พบกับโครงการบ้าน ที่ดิน
                และคอนโดคุณภาพเยี่ยมที่เราคัดสรรมาเพื่อคุณ
              </SectionSubtitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Modern House"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="font-bold text-xl">
                      บ้านเดี่ยวสไตล์โมเดิร์น
                    </h3>
                    <p className="text-sm">พื้นที่ใช้สอยกว้างขวาง</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                    alt="Luxury Condo"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="font-bold text-xl">คอนโดใจกลางเมือง</h3>
                    <p className="text-sm">วิวสวย เดินทางสะดวก</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
                    alt="Land for Sale"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="font-bold text-xl">ที่ดินเปล่าทำเลทอง</h3>
                    <p className="text-sm">เหมาะสำหรับการลงทุน</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg"
                    alt="Townhouse Project"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="font-bold text-xl">โครงการทาวน์โฮม</h3>
                    <p className="text-sm">สังคมคุณภาพ น่าอยู่</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-24 bg-gradient-to-br from-yellow-50 to-white"
          >
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="bg-gradient-to-br from-white to-yellow-50 backdrop-blur-sm rounded-2xl p-10 border border-yellow-200 shadow-xl max-w-2xl mx-auto">
                <SectionTitle>เริ่มต้นกับเรา</SectionTitle>
                <SectionSubtitle>
                  รับข่าวสาร อัปเดต
                  และข้อเสนอสุดพิเศษเกี่ยวกับโครงการอสังหาริมทรัพย์บน Web3
                  ของเราก่อนใคร
                </SectionSubtitle>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none bg-white text-gray-900 placeholder-gray-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    ลงทะเบียน
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full p-6 bg-gradient-to-r from-yellow-50 to-white">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-4 sm:mb-0">
              © {new Date().getFullYear()} Dan Realestate. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:info@danrealestate.com"
                className="hover:text-yellow-600 transition-colors"
              >
                Contact Us
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
