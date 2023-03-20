import { redirect } from "next/navigation";

function redirectHomePage():void {
  redirect("/");
}

export default redirectHomePage;
