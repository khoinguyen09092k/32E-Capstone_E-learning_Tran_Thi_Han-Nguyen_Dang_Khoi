import React from "react";
import "../../../templates/UserTemplate/styleImgs.css"
import ImgYKien from "../../../assets/images/ykien.png"
export default function Contact() {
  return (
<<<<<<< HEAD

  <div className="user-page mb-4">
  <div className="grid grid-flow-col grid-cols-12 justify-center gap-x-8 px-5 pt-5 relative">
    <div className="col-span-6">
    <form>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">LIÊN HỆ TRUNG TÂM</h1>
              <input
                type="text"
                class="block border border-green-light w-full p-3 rounded mb-4"
                name="hoTen"
                placeholder="Nhập họ tên"
              />
               <input
                type="text"
                class="block border border-green-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              <input
                type="number"
                class="block border border-green-light w-full p-3 rounded mb-4"
                name="soDT"
                placeholder="Nhập số điện thoại"
              />
               <input
                type="text"
                class="block border border-green-light w-full  p-3 rounded mb-4"
                name="taiKhoan"
                placeholder="Nhập ý kiến của bạn!"
              />
              <div className="mt-10">
                <button
                  className="text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline
                          shadow-lg"
                  style={{ backgroundColor: "#33CC99" }}
                >
                 Gửi góp ý
                </button>
              </div>
            </div>
          </div>
=======
    <div className="relative bg-white ">
    <div>
    <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2 ">
      <div className="lg:pr-8">
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:mt-12"
          style={{color:"#33CC99"}}
          >CYBERSOFT LEARNING</h2>
          <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Họ & tên
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Điện thoại
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  aria-describedby="phone-description"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                  Tôi có thể giúp gì cho bạn
                </label>
              </div>
              <div className="mt-1">
                <textarea
                  id="how-can-we-help"
                  name="how-can-we-help"
                  aria-describedby="how-can-we-help-description"
                  rows={4}
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>   
         
            <div className="text-right sm:col-span-2">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{backgroundColor:"#E96036"}}
              >                
                Đăng kí tư vấn
              </button>
            </div>
          </form>
>>>>>>> main
        </div>
      </form>
    </div>
    <div className="col-span-6">
        <img className="imgLogin" src={ImgYKien} />
    </div>
    </div>
   
  </div>
</div>

  );
}
