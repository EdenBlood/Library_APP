import { translate } from "../i18n";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-5">
        <div className=" bg-slate-800 ">
          <header className="max-w-5xl mx-auto">
            <h1 className="font-bold text-4xl text-center py-4">
              {translate("WELCOME")}
            </h1>
          </header>
        </div>

        <main className="max-w-5xl mx-auto bg-slate-800 h-full flex flex-col gap-5">
          <Outlet />
        </main>
      </div>
    </>
  );
}
