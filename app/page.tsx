import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <div className="md:text-3xl text-2xl font-extralight text-center">Get to know me</div>

      <div className="flex flex-col space-y-4 border mt-5 rounded-lg p-6 sm:p-10 border-white w-full max-w-sm">

        <Link
          href={"https://www.facebook.com/share/1DKkAGceTB/?mibextid=wwXIfr"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border items-center border-white p-3 flex gap-4 rounded-2xl w-full">
            <div>
              <Icon
                icon="logos:facebook"
                width="40"
                height="40"
                className="cursor-pointer text-gray-500 hover:text-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Facebook</span>
              <span className="text-xs break-all">IdentityClothline@facebook.com</span>
            </div>
          </div>
        </Link>

        <Link
          href={"https://www.tiktok.com/@identity_hq?_r=1&_t=ZS-928RUnDC6du"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border items-center border-white p-3 flex gap-4 rounded-2xl w-full">
            <div>
              <Icon
                icon="logos:tiktok-icon"
                width="40"
                height="40"
                className="cursor-pointer text-gray-500 hover:text-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Tiktok</span>
              <span className="text-xs break-all">identity_hq@tiktok.com</span>
            </div>
          </div>
        </Link>

        <Link
          href={"https://wa.me/message/ZR5M36WLJU6NP1"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border items-center border-white p-3 flex gap-4 rounded-2xl w-full">
            <div>
              <Icon
                icon="logos:whatsapp-icon"
                width="40"
                height="40"
                className="cursor-pointer text-gray-500 hover:text-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Whatsapp</span>
              <span className="text-xs break-all">IdentityClothline@whatsapp.com</span>
            </div>
          </div>
        </Link>

        <Link
          href={"https://www.instagram.com/identity.yyy?igsh=MTlrNHV1anI1cHFicg%3D%3D&utm_source=qr"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border items-center border-white p-3 flex gap-4 rounded-2xl w-full">
            <div>
              <Icon
                icon="skill-icons:instagram"
                width="40"
                height="40"
                className="cursor-pointer text-gray-500 hover:text-primary"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Instagram</span>
              <span className="text-xs break-all">identity.yyy@instagram.com</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}