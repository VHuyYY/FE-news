import React from 'react';
import { MainArticle, SideArticle, RightSideArticle } from './ArticleCards';
import SubSection from "./SubSection.jsx";

const MainContent = () => (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 bg-[#FCFAF6]  border-l border-r border-[#F0ECDF]">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
                <MainArticle
                    image="https://i1-vnexpress.vnecdn.net/2025/10/10/VNEPlan-1760086463-6299-1760086520.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=toCufzySCJ5uapkRZvB-bA"
                    title="Dự án truyền ánh sáng Mặt Trời vào buổi tối gây lo ngại"
                    subtitle="Mỹ-Reflect Orbital dự định phóng hàng nghìn vệ tinh lên quỹ đạo Trái Đất để phản chiếu ánh sáng Mặt Trời khiến các nhà thiên văn học lo ảnh hưởng hệ sinh thái"
                />
            </div>
            <div className="md:col-span-1 flex flex-col gap-6 border-r border-gray-300 pr-2">
                <SideArticle
                    image="https://i1-vnexpress.vnecdn.net/2025/10/09/VNEPlane2-1760007905-6144-1760008090.jpg?w=380&h=228&q=100&dpr=2&fit=crop&s=gpUbcBsqmxCAUI4dJ1Rxjw"
                    title="Cây lá kim có thể hé lộ mỏ vàng dưới lòng đất"
                    border={true}
                />
                <SideArticle
                    image="https://i1-vnexpress.vnecdn.net/2025/10/10/VNEGold-1760078992-9011-1760079063.jpg?w=380&h=228&q=100&dpr=2&fit=crop&s=x_CUTB1xHbLq8ChGEjpLtw"
                    title="Đánh giá iPhone Air - muốn 'yêu' phải đánh đổi"
                />
            </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-4 ">
            <RightSideArticle
                image="https://i1-vnexpress.vnecdn.net/2025/10/10/top1-1760066445-9582-1760066486.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=scfaLaa0mvlxmv1lEY76Vg"
                title="Mỹ thử nghiệm công nghệ khai thác lithium tăng gấp đôi sản lượng"
                border={true}
            />
            <RightSideArticle
                image="https://i1-vnexpress.vnecdn.net/2025/10/08/VNELithium-1759910339-6544-1759910411.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=FzqetjHSodb2dpA0G0BYxQ"
                title="Oppo A6 Pro - smartphone siêu bền, pin 7.000 mAh"
                border={true}
            />
            <RightSideArticle
                image="https://i1-vnexpress.vnecdn.net/2025/10/10/DSC1230-1760111449.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=zSbh02SPAQrOYd6HTv0meA"
                title="Bốn điện trở thành của hàng bách hóa"
                border={true}
            />
            <RightSideArticle
                image="https://i1-vnexpress.vnecdn.net/2025/10/10/bach-hoa-buu-dien-1-jpg-176010-2374-2294-1760108743.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=2EdGhQz5_MBjXTuwQXU5wA"
                title="Phường ở Hà Nội muốn trở thành đô thị thông minh"
                border={false}
            />
        </div>

    </div>
        {/*<SubSection/>*/}
    </>

);

export default MainContent;