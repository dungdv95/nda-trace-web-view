"use client";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const procedure = [
  {
    id: "1",
    name: "Đóng gói",
    description: "Aeonmall (Nhật Bản) – Công ty bán lẻ",
    date: "21/12",
  },
  {
    id: "2",
    name: "Chế biến",
    description: "Aeonmall (Nhật Bản) – Công ty bán lẻ",
    date: "12/09",
  },
  {
    id: "3",
    name: "Vận chuyển",
    description: "DHL Logistic",
    date: "03/08",
  },
  {
    id: "4",
    name: "Thu hoạch",
    description: "BioSuisse (Thụy Sĩ) – Chuỗi đóng gói thực phẩm hữu cơ",
    date: "01/07",
  },
  {
    id: "5",
    name: "Chăm sóc",
    description: "BioSuisse (Thụy Sĩ) – Chuỗi đóng gói thực phẩm hữu cơ",
    date: "11/03",
  },
  {
    id: "6",
    name: "Cây giống",
    description: "BioSuisse (Thụy Sĩ) – Chuỗi đóng gói thực phẩm hữu cơ",
    date: "01/02",
  },
];

export default function Page() {
  const router = useRouter();
  return (
    <div className="px-4 py-2 flex flex-col gap-8">
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
      <div className="relative mt-12 bg-[linear-gradient(148deg,_#FFFFFF_22%,_#E9F1FF_38%,_#FFFFFF_56%,_#FFFFFF_80%)] border boder-[#D0E0FF] rounded-[16px]">
        <div className="absolute top-[-46px] left-0 right-0  flex justify-center">
          <Avatar className="size-[74px] border border-[#D6D6D6]">
            <AvatarImage
              src="/assets/images/mango.png"
              alt="mg"
              className="object-cover"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-10 mb-4 flex flex-col gap-2">
          <div className="px-4 flex flex-col gap-4">
            <div className="mb-2 flex items-center gap-2 justify-center">
              <span className="text-[#0D182D] text-2xl font-semibold leading-[32px]">
                Xoài Cát Chu
              </span>
              <Icons.checkIcon />
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Hàng hoá
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                Hoa quả
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Ngày đóng gói
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                22/06/2025
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Khối lượng tịnh
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                350g
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Hạn sử dụng
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                22/12/2025
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs leading-[18px] text-[#0D182D] min-w-[75px]">
                Xuất xứ
              </span>
              <span className="text-xs leading-[18px] text-[#0D182D] font-medium text-end">
                Đồng Tháp
              </span>
            </div>
          </div>
          <div className="mt-[26px] p-2 bg-[#DEF1FF] rounded-[4px] text-xs text-center text-[#0053C7] leading-[100%]">
            Thông tin được chứng thực bởi Hiệp hội Dữ liệu quốc gia
          </div>
          <div className="bg-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="size-12 border border-[#C2DBFF]">
                <AvatarImage
                  src="/assets/images/massan.png"
                  alt="ms"
                  className="object-cover"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-between">
                <div className="flex gap-1.5 items-center">
                  <span className="text-sm font-medium leading-5 text-[#0D182D]">
                    Masan Consumer
                  </span>
                  <Icons.checkIcon />
                </div>
                <span className="text-sm leading-5 text-[#1570EF]">
                  www.masanconsumer.com/
                </span>
              </div>
            </div>
            <Icons.arrowRightIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-sm leading-5 text-[#414651] font-medium">
          Quy trình truy xuất nguồn gốc sản phẩm
        </span>
        <div className="flex flex-col gap-3">
          {procedure.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-3"
              onClick={() => router.push(`/nda-trace/${item.id}`)}
            >
              <div className="flex flex-col items-center">
                <div>
                  <Icons.checkCircleIcon />
                </div>
                {index < procedure.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="my-1 !h-[32px] bg-[#D5D7DA]"
                  />
                )}
              </div>
              <div className="w-full mt-[2px] flex justify-between">
                <div className="w-[65%] flex flex-col">
                  <span className="text-[#414651] text-sm leading-5 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-[#414651] text-xs leading-[18px]">
                    {item.description}
                  </span>
                </div>
                <span className="text-xs text-[#414651] leading-[18px]">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
