'use client'

import Save from "../Buttons/Save";
import { ILead } from "@components/interfaces";
import { useState } from "react"
import { useRouter } from "next/navigation"

const LeadForm = () => {

    const router = useRouter()

    const [lead, setLead] = useState<ILead>({
        name: "",
        phone: "",
        email: "",
        bills: ""
    })

    async function handleSubmit(e: any) {
        e.preventDefault()

        const result = await fetch('/api/sendMail', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                lead
            })
        })
        if (result) router.push(`/obrigado?lead=${lead.name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex gap-3 flex-md-nowrap flex-wrap">
                <input value={lead.name} onChange={e => setLead({ ...lead, name: e.target.value })} required type="text" className="form-control pt-2 pb-2 fs-5" placeholder="Nome Completo" />
                <input value={lead.phone} onChange={e => setLead({ ...lead, phone: e.target.value })} required type="text" className="form-control pt-2 pb-2 fs-5" placeholder="Telefone" maxLength={12} minLength={9} />
            </div>
            <div className="mb-3">
                <input value={lead.email} onChange={e => setLead({ ...lead, email: e.target.value })} required type="email" className="form-control pt-2 pb-2 fs-5" placeholder="Digite seu melhor e-mail" />
            </div>
            <div className="mb-3">
                <input value={lead.bills} onChange={e => setLead({ ...lead, bills: e.target.value })} required type="text" className="form-control pt-2 pb-2 fs-5" placeholder="Média mensal de gasto com energia" />
            </div>
            <Save />
        </form>
    );
}

export default LeadForm;