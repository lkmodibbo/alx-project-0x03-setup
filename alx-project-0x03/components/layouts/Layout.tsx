import type { LayoutProps } from "@/interface";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-lg font-bold">Splash App</h1>
      </header>
      <main className="flex-1 py-6 px-8">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-4">
        © {new Date().getFullYear()} Splash App — All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;
