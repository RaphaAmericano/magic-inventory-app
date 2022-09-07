import { useLoginForm } from "./loginFormHook"
import type { IFields } from "./loginFormHook";
import { authQueries } from "@hooks/queries";
import { useStores } from "@stores/index";

export function LoginForm(){
    const loginForm = useLoginForm();
    const useAuthUser = authQueries.useAuthUser();


    async function onSubmit(data:IFields){
        console.log(data)
        try {
            const { email, password } = data;
            const user = await useAuthUser.mutateAsync({ email, password });
        } catch (error) {
            const { status } = error as { message: string; status: number };
        }
    }

    function onError(error:any){
        console.log(error);
    }

    return <form onSubmit={loginForm.handleSubmit(onSubmit, onError)}>
        <div>
            <label>Email</label>
            <input type="email" {...loginForm.register('email')}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" {...loginForm.register('password')}/>
        </div>
        <div>
            <button type="submit">Entrar</button>
        </div>
    </form>
}