import { getSession } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getSession();
  if (!session?.user) {
    redirect("/sign-in");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
