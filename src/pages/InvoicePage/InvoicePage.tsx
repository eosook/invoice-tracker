import EmptyInvoiceList from '../../components/EmptyInvoiceList/EmptyInvoiceList'
import Invoice from '../../components/Invoice/Invoice'
import InvoiceHeader from '../../components/InvoiceHeader/InvoiceHeader'
import './InvoicePage.scss'

export default function InvoiceList(){
    return (
        <main className="invoice-list">
            <InvoiceHeader />
            {/* <EmptyInvoiceList /> */}
            <Invoice />
        </main>
    )
}