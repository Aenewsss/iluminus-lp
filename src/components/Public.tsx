import Image from "next/image";
import ReadySave from "./Buttons/ReadySave";

const Public = () => {
    return (
        <section className="bg-sec pt-5 pb-5" id="differentials">
            <div className="container">
                <h2 className="text-black section-heading display-2 text-center w-100 mt-0">Para quem é a Iluminus?</h2>
            </div>

            <div className="d-flex mt-5 flex-md-nowrap flex-wrap">
                <div className="images-public position-relative">
                    <Image className="object-fit-cover h-100 " fill quality={100} src="/images/casa.png" alt="Casa" />
                    <h3 className="fs-1 text-white fw-normal w-100 text-center position-absolute bottom-0 z-1">Casa</h3>
                </div>
                <div className="images-public position-relative">
                    <Image className="object-fit-cover h-100 " fill quality={100} src="/images/apartamento.png" alt="Apartamento" />
                    <h3 className="fs-1 text-white fw-normal w-100 text-center position-absolute bottom-0 z-1">Apartamento</h3>
                </div>
                <div className="images-public position-relative">
                    <Image className="object-fit-cover h-100 " fill quality={100} src="/images/condominio.png" alt="Condomínio" />
                    <h3 className="fs-1 text-white fw-normal w-100 text-center position-absolute bottom-0 z-1">Condomínio</h3>
                </div>
                <div className="images-public position-relative">
                    <Image className="object-fit-cover h-100 " fill quality={100} src="/images/area rural.png" alt="Área rural" />
                    <h3 className="fs-1 text-white fw-normal w-100 text-center position-absolute bottom-0 z-1">Área rural</h3>
                </div>

            </div>

            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-5">
                        <p className="text-dark text-center">Clique no botão abaixo e deixe o sol pagar sua conta já na próxima fatura!</p>
                        <ReadySave />
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        </section>

    );
}

export default Public;