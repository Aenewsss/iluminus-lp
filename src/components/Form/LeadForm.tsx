'use client'

import Save from "../Buttons/Save";
import { environments } from "@components/environments";
import { useRouter } from "next/navigation"

const LeadForm = () => {

    const router = useRouter()

    function handleSubmit(e: any) {
        e.preventDefault()
        router.push(environments.whatsAppLink)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex gap-3 flex-md-nowrap flex-wrap">
                <input required type="text" className="form-control pt-2 pb-2 fs-5" placeholder="Nome Completo" />
                <input required type="text" className="form-control pt-2 pb-2 fs-5" placeholder="Telefone" />
            </div>
            <div className="mb-3">
                <input required type="email" className="form-control pt-2 pb-2 fs-5" placeholder="Digite seu melhor e-mail" />
            </div>
            <div className="mb-3">
                <input required type="text" className="form-control pt-2 pb-2 fs-5" placeholder="Média mensal de gasto com energia" />
            </div>
            <Save />
        </form>
    );
}

export default LeadForm;