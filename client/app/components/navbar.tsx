import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import StoreSwitcher from "@/components/store-switcher";
import { MainNav } from "./main-nav";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }


  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center w-screen px-4">
        <MainNav className="mx-6" />
          <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
 
export default Navbar;