import Image from "next/image";
import LeadForm from "./Form/LeadForm";

const HomeTop = () => {
    return (
        <section className="home-top pt-5 position-relative">
            <div className="container d-flex flex-column align-items-center pt-md-5 mt-md-5 justify-content-center ">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-main text-uppercase fst-italic mb-0 d-md-block d-none">Deixe o sol pagar a conta</h2>
                        <h1 className="display-2 text-white fw-bold ">
                            Descubra como economizar até <span className="text-main">95%</span> na fatura com energia solar de alta eficiência
                        </h1>
                    </div>

                    <div className="col-md-6 mt-4">
                        <p>Preencha o formulário e descubra o quanto vai economizar já na próxima fatura!</p>
                        <LeadForm />
                    </div>
                    <div className="col-md-6 d-md-flex align-items-center justify-content-end d-none">
                        <Image className="mw-300" fill src="/iluminus-logo-white.png" alt="Logo Iluminus Transparente" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomeTop;
