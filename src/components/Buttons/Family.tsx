import { environments } from "@components/environments";
import Link from "next/link";

const Family = () => {
    return (
        <Link target="_blank" href={environments.whatsAppLink} className="btn btn-main text-white scale fs-3 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5">
            <span>Quero fazer parte dessa família!</span>
        </Link>
    );
}

export default Family;