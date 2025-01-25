export function AboutSection() {
  return (
    <section id="about" className="section bg-white py-4">
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-8xl font-bold mb-6 text-center">ABOUT ME</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">이름</h3>
            <p className="text-3xl font-bold">박진우</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">생년월일</h3>
            <p className="text-3xl font-bold">2000.07.05</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">연락처</h3>
            <p className="text-3xl font-bold">zhdzhdwlsdn76@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
