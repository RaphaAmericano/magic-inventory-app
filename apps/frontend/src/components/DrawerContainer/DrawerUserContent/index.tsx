import { useStores } from "@stores/index";

interface IProps {}
export function DrawerUserContent(props: IProps) {
  const { authStore } = useStores();
  const { user } = authStore;
  if(!user) return null;
  return <div>{user?._doc.name}</div>;
}
