import React, { Fragment } from "react";
import "./../Style/homeStyle.css";
import Lazyload from "react-lazyload";
import CarouselHome from "../Components/Home/CarouselHome";
import TabCoursesHome from "../Components/Home/tabCoursesHome";
import { history } from "../../../App";
import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD

=======
import img from "./../../../../src/assets/images/img7.jpg"
import face1 from "./../../../../src/assets/images/face1.jpg"
import face2 from "./../../../../src/assets/images/face2.jpg"
>>>>>>> main
export default function HomeContent(props) {
  return (
    <Fragment>
      <CarouselHome />
<<<<<<< HEAD
      <div className="container mx-auto py-5 sm:py-16">
        <div className="heading text-center py-10 sm:py-14">
          <h1 className="text-3xl px-10 sm:text-6xl font-bold py-3">
          Đào tạo nghề lập trình chuyên sâu từ ZERO
          </h1>
          <p className="text-base font-normal px-2 sm:px-80">
          CyberSoft khai thác nhu cầu tuyển dụng lập trình, 
          kết nối việc làm tới doanh nghiệp và tích hợp 
          các dự án với công nghệ mới nhất vào phương pháp 
          đào tạo tích cực cho các học viên học xong có việc làm ngay. 
          Chương trình giảng dạy được biên soạn may đo dành riêng 
          cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, 
          luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.
          </p>
          <button
=======
      <div className="container mx-auto sm:py-8 mb-8">
            <div className="text-center">
              <h2 className="text-4xl sm:text-4xl  py-3">
                KHÓA HỌC TẠI <span className="text-green-500">VLearning</span>
              </h2>
              <p className="text-md text-gray-500 font-normal px-2 mb-5 sm:px-80">
                Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay. Hơn 1000 bài tập và dự án thực tế</p>

            </div>
        <div className="grid grid-cols-2">
          <div>
          <img className="" src={img} alt="" style={{width:'100%'}}/>
             
          </div>
          <div className="" style={{paddingTop:'50px'}}>
           
            <div className="grid grid-cols-2 gap-4">
              <div >
                <div className="mb-4">
                  <h4 className="text-lg">HỆ THỐNG HỌC TẬP</h4>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</p>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</p>
                </div>
                <div>
                  <h4 className="text-lg">LỘ TRÌNH PHÙ HỢP</h4>
                 <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</p>
                 <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</p>
                  
                </div>
              </div>

              <div>
                <div>
                  <h4 className="text-lg">GIẢNG VIÊN</h4>
                 <p><i class="fa-solid fa-circle-check text-green-500 mr-3"></i>
                 Tương tác cùng mentor và giảng viên qua phần thảo luận
                 </p>
                 <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Review code và đưa ra các nhận xét góp ý, tương tác thảo luận giữa các học viên</p>

                </div>
                <div>
                  <h4 className="text-lg">CHỨNG NHẬN</h4>
                  <p><i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Chấm bài và có thể vấn đáp trực tuyến để review</p>
                  <p><i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</p>
                </div>
              </div>
              <button
>>>>>>> main
            onClick={(e) => {
              e.preventDefault();
              history.push("/courses");
            }}
<<<<<<< HEAD
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors"
          >
            Xem các khoá học
          </button>
        </div>
        <div className="img_screenshotlive_home relative mt-20 flex justify-center">
          <img
            className="w-11/12 sm:w-9/12"
            src="./images/students.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div className="heading text-center py-14">
          <h1 className="text-3xl sm:text-6xl font-bold py-3">
            Lộ trình và danh sách các khoá học
          </h1>
          <p className="text-lg font-normal px-2 mb-24 sm:px-80">
=======
            className="bg-green-500 hover:bg-green-500 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors"
          >
            Xem các khoá học
          </button>
            </div>
          </div>
        </div>
        <div className="heading text-center " style={{margin:'50px'}}>
          <h2 className="text-4xl sm:text-4xl  py-3">
            LỘ TRÌNH VÀ DANH SÁCH CÁC <span className="text-green-500">KHOÁ HỌC</span>
          </h2>
          <p className="text-md text-gray-500 font-normal px-2 mb-5 sm:px-80">
>>>>>>> main
                CyberSoft vạch ra lộ trình học lập trình một cách chi tiết, 
                bài bản, chuyên nghiệp, chuẩn nghề ĐH Arizona -USA, 
                100% thực hành theo dự án thực tế tránh lan man, 
                luyện tập tư duy, logic nền tảng chuyên sâu dễ dàng phát triển lên senior, leader. 
                Đi đúng lộ trình CyberSoft bạn sẽ tiết kiệm được thời gian, chi phí và có việc làm tốt nhất và bền vững để thăng tiến.
          </p>
          <div className="py-8">
            <Lazyload>
              <TabCoursesHome />
            </Lazyload>
          </div>
        </div>

<<<<<<< HEAD
            </h2>
            <p className="text-base sm:text-xl mb-12 leading-normal">
                Hơn 92% trên hơn 5000 học viên học tại CyberSoft học theo lộ trình và có việc làm tốt. 
                CyberSoft đã triển khai chương trình Học lập trình trực tuyến Online tại CyberLearn 
                để tạo điều kiện cho các bạn không có điều kiện học trực tiếp tại HCM có thể tham gia.
            </p>
            <NavLink
              to="./signup"
              className="mt-5 bg-purple-600 hover:bg-purple-400 hover:text-white  text-white font-semibold text-sm sm:text-base p-4 sm:p-5 rounded-lg transition-colors"
            >
              Đăng ký ngay
            </NavLink>
          </div>
          <div className="img_collegeLevel_home ">
            <Lazyload>
              <img src="./images/online.png" alt="" width="100%" />
            </Lazyload>
          </div>
        </div>
        <div
          className="mt-24 sm:mt-44 mx-5 sm:mx-0 grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-4"
        >
          <div className="img_collegeLevel_home order-2 sm:order-1 mt-10 sm:mt-0">
            <Lazyload>
              <img className="w-11/12 sm:w-11/12" src="./images/img.jpg" alt="" />
            </Lazyload>
          </div>
          <div className="order-1 sm:order-2 px-1 sm:px-12 col-span-1">
            <h2 className="sm:text-6xl text-3xl text-center sm:text-left font-semibold leading-tight">
            Thay đổi sự nghiệp 
              <br />
              - Học lập trình theo lộ trình chuyên biệt tại
              <br />CyberSoft
            </h2>
            <p className="text-lg text-center sm:text-left sm:text-2xl mb-12 sm:leading-10">
            Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, 
            sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. 
            Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp. Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.
            </p>
            <Link
              to="./contact"
              className="flex mx-auto sm:mx-0 w-fit mt-5 bg-purple-600 hover:bg-purple-700 hover:text-white 
              text-white font-semibold text-sm sm:text-base p-4 sm:p-5 rounded-lg transition-colors"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
=======

        <div style={{backgroundColor:'rgb(204 204 204 / 12%)',padding:'50px'}}>
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <h3 class="text-4xl sm:text-4xl mb-12 text-center">ĐÁNH GIÁ TỪ HỌC VIÊN</h3>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <i class="fa-solid fa-quote-right text-4xl"></i>
                    <p class="leading-relaxed mb-6">Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
.</p>
                    <a class="inline-flex items-center">

                      <img className=" rounded-full flex-shrink-0 object-cover object-center" src={face1} alt="" style={{ width: '60px', height: '60px' }} />

                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                        <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <i class="fa-solid fa-quote-right text-4xl"></i>
                    <p class="leading-relaxed mb-6">Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
</p>
                    <a class="inline-flex items-center">
                      <img className=" rounded-full flex-shrink-0 object-cover object-center" src={face2} alt="" style={{ width: '60px', height: '60px' }} />

                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        <span class="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
        </div>
      </div>
    </div>
  </div>
</section>
>>>>>>> main
        </div>
      </div>
    </Fragment>
   
  );
}
