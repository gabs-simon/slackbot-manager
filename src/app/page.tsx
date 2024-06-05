import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();
  console.log({ session });

  if (!session) {
    redirect("/api/auth/signin");
  }
  redirect("/admin/settings/general");
}
