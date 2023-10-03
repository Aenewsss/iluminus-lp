import Image from "next/image";
import Link from "next/link";
import { environments } from "@components/environments";
import ReadySave from "./Buttons/ReadySave";

const Contact = () => {
    return (
        <section className="container pt-5 mt-5" id="contact">
            <div className="bg-sec mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-100">
                            <iframe width="100%" height="440" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=440&amp;hl=en&amp;q=Irmandade%20F%C3%A9pas+(Irmandade%20F%C3%A9pas)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="section-heading display-3 text-black w-100 mt-md-0 mt-3 mb-5 pt-0 container">Entre em contato</h2>

                        <Link target="_blank" href={environments.mapsLink} className="d-flex gap-2 line-after mt-5 align-items-center pb-2">
                            <Image width={30} height={30} src="/icons/Localização.svg" alt="Ícone Localização" />
                            <h5 className="fw-light text-black mb-0">
                                CENTRO EMPRESARIAL VARIG - 12° ANDAR <br />SALA 1205 - ASA NORTE - BRASÍLIA
                            </h5>
                        </Link>

                        <Link target="_blank" href={environments.mailLink} className="d-flex gap-2 line-after mt-5 align-items-center pb-2">
                            <Image width={30} height={30} src="/icons/Email.svg" alt="Ícone Email" />
                            <h5 className="fw-light text-black mb-0">cotacao@iluminus.solar</h5>
                        </Link>

                        <Link target="_blank" href={environments.whatsAppLink} className="d-flex gap-2 line-after mt-5 align-items-center pb-2">
                            <Image width={30} height={30} src="/icons/WhatsApp.svg" alt="Ícone WhatsApp" />
                            <h5 className="fw-light text-black mb-0">(61) 4042-7830</h5>
                        </Link>

                        <div className="me-5 mt-5">
                            <ReadySave />
                        </div>

                    </div>
                </div>
            </div>

        </section >
    );
}

export default Contact;