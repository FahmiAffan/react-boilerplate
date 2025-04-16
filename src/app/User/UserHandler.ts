import { User } from "./interface";
export const trx = (props: User) => {
    return 'hallo nama saya ' + props.name + ' umur saya ' + props.age + ' hubungi saya ada nomer ' + props.phone;
}

trx.defaultProps = {
    name: 'laosfloasfk'
}