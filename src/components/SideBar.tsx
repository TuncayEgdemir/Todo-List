import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";


const SideBar = () => {

  const { login, register , logout , user , isAuthenticated , isLoading} = useKindeAuth();
  console.log(user);
  

  return (
    <section className="flex flex-col justify-between col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm  />
      <div className="mt-auto space-y-2">
        { isLoading ? null : 
          isAuthenticated ? (
            <>
              <p>Logged in as {user?.given_name}</p>

              <Button title="Logout"  onClick={logout} buttonType="secondary" />
            </>
          ) : (
            <>
              <Button onClick={login} buttonType="secondary" title="Login" />
             <Button onClick={register} buttonType="secondary" title="Sign Up" />
            </>
          )
        }
      
      </div>
    </section>
  );
};

export default SideBar;
