"use client";

import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const stepDetail = {
  title: "Vận chuyển",
  type: "Vận chuyển",
  route: "Tuyến: KCN Tân Bình → Kho VinMart Tân Bình",
  typeCar: "Xe tải 1.5 tấn",
  plate: "51C-123.45",
  required: "Đồng Tháp",
  transfer: "DHL Logistic",
  web: "www.dhl.com",
};

export default function MainPage({ id }: { id: string }) {
  return (
    <div className="px-4 py-2 flex flex-col gap-[35px]">
      <div className="px-3 py-1 flex items-center gap-2 bg-[#FFFFFFCC] rounded-full">
        <Image
          alt="lg"
          src="/assets/images/logo-data-national.png"
          width={38}
          height={38}
        />
        <span className="text-[#0D182D] text-base leading-6">
          Hiệp hội Dữ liệu quốc gia
        </span>
      </div>
      <div className="bg-[linear-gradient(148deg,_#FFFFFF_22%,_#E9F1FF_38%,_#FFFFFF_56%,_#FFFFFF_80%)] border boder-[#D0E0FF] rounded-[16px]">
        <div className="mt-10 mb-4 flex flex-col gap-2">
          <div className="px-4 flex flex-col gap-4">
            <div className="mb-2 flex items-center gap-2 justify-center">
              <span className="text-[#0D182D] text-2xl font-semibold leading-[32px]">
                {stepDetail.title}
              </span>
              <Icons.checkIcon />
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Loại hình
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                {stepDetail.type}
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Tuyến đường
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                {stepDetail.route}
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Loại xe
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                {stepDetail.typeCar}
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Biển số xe
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                {stepDetail.plate}
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Yêu cầu
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                {stepDetail.required}
              </span>
            </div>
          </div>
          <div className="mt-2 p-2 bg-[#DEF1FF] rounded-[4px] text-xs text-center text-[#0053C7] leading-[100%]">
            Thông tin được chứng thực bởi Hiệp hội Dữ liệu quốc gia
          </div>
          <div className="bg-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="size-12 border border-[#C2DBFF]">
                <AvatarImage
                  src="/assets/images/dhl.png"
                  alt="dhl"
                  className="object-cover"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-between">
                <div className="flex gap-1.5 items-center">
                  <span className="text-sm font-medium leading-5 text-[#0D182D]">
                    {stepDetail.transfer}
                  </span>
                  <Icons.checkIcon />
                </div>
                <span className="text-xs leading-[18px] text-[#1570EF]">
                  {stepDetail.web}
                </span>
              </div>
            </div>
            <Icons.arrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
