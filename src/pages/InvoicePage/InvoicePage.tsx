import EmptyInvoiceList from '../../components/EmptyInvoiceList/EmptyInvoiceList';
import Invoice from '../../components/Invoice/Invoice';
import InvoiceHeader from '../../components/InvoiceHeader/InvoiceHeader';
import { useEffect, useState } from 'react'
import axios from 'axios';
import './InvoicePage.scss'
import { StringOptionsWithImporter } from 'sass';

type InvoiceListProps = {
    mode: string
}

interface invoice {
    invoiceId: string,
    createdAt: string,
    paymentDue: string,
    description: string,
    paymentTerms: number,
    clientName: string,
    clientEmail: string,
    status: string,
    senderAddress: object,
    clientAddress: object,
    total: number
}

export default function InvoiceList({mode}:InvoiceListProps){
    const [invoicesList, setInvoicesList] = useState<invoice[]>([]);

    useEffect(() => {
        const getInvoiceData = async () => {
            const response = await axios.get('http://localhost:8080/invoices')
            setInvoicesList(response.data);
            console.log(response.data);
        }
        getInvoiceData();
    }, []);

    if (invoicesList.length > 0){
        return (
            <main className={mode === "light" ? "invoice-list" : "invoice-list invoice-list--dark"}>
            <InvoiceHeader mode={mode}/>
            
            {invoicesList.map((invoice) => {
                return (
                    <Invoice mode={mode} id={invoice.invoiceId} name={invoice.clientName} date={invoice.createdAt} amount={invoice.total} status={invoice.status}/>
                )
            })}
        </main>
        );
    } else {
        return (
            <main className={mode === "light" ? "invoice-list" : "invoice-list invoice-list--dark"}>
                <InvoiceHeader mode={mode}/>
                {/* <EmptyInvoiceList /> */}
            </main>
        )
    }
}