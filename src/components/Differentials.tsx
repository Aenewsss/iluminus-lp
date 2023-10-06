import Image from "next/image";
import ReadySave from "./Buttons/ReadySave";

const Differentials = () => {
    return (
        <section className="bg-sec pt-5 pb-5" id="differentials">
            <div className="container">
                <h2 className="text-black section-heading display-2 text-center w-100 mt-0">Entenda os diferenciais de escolher a Ilúminus</h2>

                <div className="row mt-5 pt-5 pb-5">
                    <div className="col-md-4">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/images/economia.svg" alt="Economia Ícone" />
                            <h4 className="fw-bold text-black text-center">Economia de até 95% na fatura</h4>
                            <h5 className="fw-light text-black text-center">Com a energia solar de alta eficiência da iLuminus, você pode economizar até 95% na fatura de energia elétrica.</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-4">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/images/gráfico.svg" alt="Gráfico Ícone" />
                            <h4 className="fw-bold text-black text-center">500% de retorno do investimento</h4>
                            <h5 className="fw-light text-black text-center">A energia solar proporciona um retorno do investimento e uma economia a longo prazo.Invista em um futuro sustentável e tenha um retorno de até 500% do valor investido.</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-4">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/images/celular.svg" alt="Celular Ícone" />
                            <h4 className="fw-bold text-black text-center">Monitoramento na palma da sua mão</h4>
                            <h5 className="fw-light text-black text-center">Com a tecnologia da iLuminus do Brasil, você pode monitorar a geração do seu sistema solar utilizando apenas o seu celular!</h5>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/images/tres-decadas.svg" alt="Três décadas Ícone" />
                            <h4 className="fw-bold text-black text-center">3 décadas de energia limpa</h4>
                            <h5 className="fw-light text-black text-center">Trabalhamos com tecnologia de ponta e os melhores equipamentos disponíveis no mercado mundial para garantir máxima performance em nossas instalações, assim podemos oferecer até 30 anos de garantia.</h5>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/images/sol.svg" alt="Sol Ícone" />
                            <h4 className="fw-bold text-black text-center">Compartilhe o poder do sol</h4>
                            <h5 className="fw-light text-black text-center">É possível compartilhar a energia gerada em excesso com outras residências ou comércios. Ajude a sua comunidade e contribua para um planeta mais sustentável!</h5>
                        </div>
                    </div>

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

export default Differentials;