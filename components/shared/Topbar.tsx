import { SignedIn, SignedOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


function Topbar() {
  return (
    <nav className="topbar">
      <Link href="./" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28}
          height={28} />
        <p className="text-heading3-bold 
       text-light-1 max-xs:hidden">Threads</p>
      </Link>


      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignedOutButton>
              <div className="flex cursor-pointer">
                <Image

                  src="/assets/logoout.svg"
                  alt="Logout"
                  width={24}
                  height={24}

                  />
            </div>
          </SignedOutButton>
        </SignedIn>
      </div>
    </div>
    </nav >
    )
}

export default Topbar; 