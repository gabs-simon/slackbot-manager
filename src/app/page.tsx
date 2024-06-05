import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  redirect("/admin/settings/general");
}
