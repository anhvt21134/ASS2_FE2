import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"



const LayoutWebsite = () => {
  return (
    <div>
      <header className="bg-yellow-400 h-[80px]">
        <div className="container mx-auto flex items-center gap-4">
          <Link to={`/`}><img className="w-[120px] mb-0 min-h-full" src="https://o.remove.bg/downloads/8a4719ab-927a-43f8-ad95-cc7a753b863a/th-removebg-preview.png" alt="" /></Link>
          <h5 className="text-2xl pr-5 font-bold hover:text-red-500 pl-10 ml-18">
            <Link to={`/`}></Link>
            Trang Chủ</h5>
          <h5 className="text-2xl pr-5 font-bold hover:text-red-500">

            Sản Phẩm</h5>
          <h5 className="text-2xl pr-5 font-bold hover:text-red-500">Giới Thiệu</h5>
          <h5 className="text-2xl pr-5 font-bold hover:text-red-500">Liên hệ</h5>
          <input className="grow   rounded-md ml-15" type="text" placeholder="Tìm Kiếm" />
          <i className="fa fa-search  pr-5"></i>

        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="flex flex-row pl-32">
          <div className="basis-1/4 ">
            <img src="https://tse1.mm.bing.net/th?id=OIP.AgFGsQdKdXvAD-3tGa6bUQHaC7&pid=Api&P=0&h=220" alt="" className="w-[300px] h-[200px]" />
          </div>
          <div className="basis-1/4">
            <p className='pb-2'>Gọi mua hàng: 1800.2044 (8h00 - 22h00) </p>
            <p className='pb-2'>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
            <p className='pb-2'>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
            <h2 className='mt-4 font-bold text-xl'>Đối Tác dịch vụ bảo hành</h2>
            <p>Điện Thoại - Máy tính</p>
            <p className='my-3'>Trung tâm bảo hành uỷ quyền Apple</p>
            <img src="/Rectangle (22).png" alt="" />
          </div>
          <div className="basis-1/4">
            Mua hàng và thanh toán Online <br />
            Mua hàng trả góp Online <br />
            Tra thông tin đơn hàng <br />
            Tra điểm Smember <br />
            Tra thông tin bảo hành <br />
            <p className='text-black font-bold'>Tra cứu hoá đơn VAT điện tử</p>
            Trung tâm bảo hành chính hãng <br />
            Quy định về việc sao lưu dữ liệu <br />
            <p className='text-red-500'>Dịch vụ bảo hành điện thoại </p>
          </div>
          <div className="basis-1/4">
            Quy chế hoạt động <br />
            Chính sách Bảo hành <br />
            Liên hệ hợp tác kinh doanh <br />
            <p className='text-red-500'>Khách hàng doanh nghiệp (B2B)</p>
            Ưu đãi thanh toán <br />
            Tuyển dụng <br />
          </div>
        </div>
        <div className='bg-gray-100 h-[150px] mt-6'>
          <div className="flex flex-row ml-32 text-xs ">
            <div className="basis-1/3 mt-5">
              <p className='mb-2'>Điện thoại iPhone 13-Điện thoại iPhone 12-Điện thoại iPhone 11</p>
              <p className='mb-2'>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
              <p className='mb-2'>iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</p>
            </div>
            <div className="basis-1/3 mt-5">
              <p className='mb-2'>Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A</p>
              <p className='mb-2'>Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia</p>
              <p className='mb-2'>Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A73</p>
            </div>
            <div className="basis-1/3 mt-5">
              <p className='mb-2'>Laptop - Laptop HP - Laptop Dell - Laptop Acer</p>
              <p className='mb-2'>Microsoft Surface - Laptop Lenovo - Laptop Asus</p>
              <p className='mb-2'>Máy tính để bàn- Màn hình máy tính - Camera - Camera hành trình</p>
            </div>

          </div>
          <p className='text-center text-gray-500 text-xs mt-4'>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
        </div>
      </footer>
    </div>
  )
}

export default LayoutWebsite