import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  return (
    <section className="p-10">
      <h1>hello world</h1>
      <div className="space-x-2">
        {session ? (
          <LogoutLink>
            <Button size="lg" className="cursor-pointer" variant="destructive">
              Logout
            </Button>
          </LogoutLink>
        ) : (
          <>
            <LoginLink>
              <Button size="lg" className="cursor-pointer" variant="default">
                Login
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button size="lg" className="cursor-pointer" variant="secondary">
                SIgn in
              </Button>
            </RegisterLink>
          </>
        )}
      </div>
    </section>
  );
}
