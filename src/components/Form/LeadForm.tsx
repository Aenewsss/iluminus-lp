import Save from "../Buttons/Save";

const LeadForm = () => {
    return (
        <form>
            <div className="mb-3 d-flex gap-3 flex-md-nowrap flex-wrap">
                <input required type="text" className="form-control pt-2 pb-2 pt-md-3 pb-md-3 fs-4" placeholder="Nome Completo" />
                <input required type="text" className="form-control pt-2 pb-2 pt-md-3 pb-md-3 fs-4" placeholder="Telefone" />
            </div>
            <div className="mb-3">
                <input required type="email" className="form-control pt-2 pb-2 pt-md-3 pb-md-3 fs-4" placeholder="Digite seu melhor e-mail" />
            </div>
            <Save />
        </form>
    );
}

export default LeadForm;