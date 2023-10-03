import { environments } from "@components/environments";
import Image from "next/image";
import Link from "next/link";

const WhatsAppFixed = () => {
    return (
        <div className="position-fixed whats-fixed">
            <Link href={environments.whatsAppLink} target="_blank">
                <Image fill src="/icons/whats-icon.png" alt="WhatsApp Ícone Fixo" />
            </Link>
        </div>
    );
}

export default WhatsAppFixed;