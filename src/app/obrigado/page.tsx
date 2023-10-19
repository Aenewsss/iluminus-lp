import { environments } from "@components/environments";
import Image from "next/image";

export default function Thanks() {
    return (
        <section className="vh-100 w-100 container d-flex justify-content-center align-items-center text-black row-gap-5 column-gap-5 flex-wrap flex-md-row flex-column-reverse">
            <Image width={270} height={370} src="/favicon.svg" alt="logo Iluminus" />
            <div className="d-flex flex-column">
                <h1 className="fw-medium display-2 ">Agradecemos por <br /> escolher economizar!</h1>

                <span className="mt-5">Seus dados foram armazenados e em breve entraremos em contato! Se você quiser falar com nosso atendimento agora, clique no botão abaixo.</span>
                <a href={environments.whatsAppLink} target="_blank" className="mt-2 btn btn-main text-white scale fs-3 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5 w-100">
                    <span>Falar com nosso atendimento agora</span>
                </a>
            </div>

            <a href="/" className="mt-2 text-black text-decoration-underline position-absolute bottom-0 start-0 m-4">
                <span>Voltar</span>
            </a>
        </section>
    )
}