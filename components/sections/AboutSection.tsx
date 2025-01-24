export function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">기본 정보</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-24">이름:</span>
                  <span>홍길동</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-24">생년월일:</span>
                  <span>1990.01.01</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-24">이메일:</span>
                  <span>example@email.com</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">학력</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">OO대학교</p>
                  <p className="text-gray-600">컴퓨터공학과 (2015-2019)</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">자기소개</h3>
            <p className="text-gray-600 leading-relaxed">
              안녕하세요. 저는 3년차 풀스택 개발자입니다. 
              웹 개발에 대한 깊은 관심과 열정을 가지고 있으며, 
              새로운 기술을 배우고 적용하는 것을 좋아합니다. 
              사용자 경험을 개선하고 효율적인 코드를 작성하는 것에 
              큰 가치를 두고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 