import { cookies } from "next/headers";
import {verify} from "jsonwebtoken"
export default function Autorizacion(){
    const cookie = cookies()
    console.log(cookie)
}