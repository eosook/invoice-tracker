import EmptyInvoiceList from '../../components/EmptyInvoiceList/EmptyInvoiceList'
import Invoice from '../../components/Invoice/Invoice'
import InvoiceHeader from '../../components/InvoiceHeader/InvoiceHeader'
import './InvoicePage.scss'

export default function InvoiceList(){
    return (
        <main className="invoice-list">
            <InvoiceHeader />
            {/* <EmptyInvoiceList /> */}
            <Invoice id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
            <Invoice id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"pending"}/>
            <Invoice id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
            <Invoice id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
            <Invoice id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"pending"}/>
            <Invoice id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
        </main>
    )
}