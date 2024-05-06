import "./globals.css";
import FunctionDataContex from "./context/contextData";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, info, search, buttons }) {
  return (
    <html lang="en">
      <body className="max-h-screen flex bg-[#9BC5EC] flex-col">
        <FunctionDataContex>
          <div className="flex">
            <div className="w-screen py-[1%] px-[2%]">{info}</div>
            <div className="w-screen py-[1%] px-[2%]">
              {buttons}
              {search}
            </div>
          </div>
        </FunctionDataContex>
      </body>
    </html>
  );
}