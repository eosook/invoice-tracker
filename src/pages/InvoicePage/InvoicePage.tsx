import EmptyInvoiceList from '../../components/EmptyInvoiceList/EmptyInvoiceList'
import InvoiceHeader from '../../components/InvoiceHeader/InvoiceHeader'
import './InvoicePage.scss'

export default function InvoiceList(){
    return (
        <main>
            <InvoiceHeader />
            <EmptyInvoiceList />
        </main>
    )
}