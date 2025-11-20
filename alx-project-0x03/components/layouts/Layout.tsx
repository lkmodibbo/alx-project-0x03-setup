import { LayoutProps } from "@/interface";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      {children}
    </div>
  );
}
