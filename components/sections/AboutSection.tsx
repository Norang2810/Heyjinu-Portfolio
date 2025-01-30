export function AboutSection() {
  return (
    <section id="about" className="section bg-white h-screen flex flex-col">
      {/* ABOUT ME 제목 */}
      <div className="w-full bg-white text-center py-4">
        <h2 className="text-8xl font-bold">ABOUT ME</h2>
      </div>

      {/* 인적사항 */}
      <div className="flex-1 flex items-center justify-center"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">이름</h3>
            <p className="text-3xl font-bold">박진우</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">생년월일</h3>
            <p className="text-3xl font-bold">2000.07.05</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">연락처</h3>
            <p className="text-3xl font-bold">zhdzhdwlsdn76@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
