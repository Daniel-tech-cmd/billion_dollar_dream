import Sidebar from "@/app/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}) {
  // Check if the current route is a dashboard route
  // This is a simple approach; for more complex routing, use usePathname from next/navigation

  return (
    <html lang="en">
      <body className={``}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
