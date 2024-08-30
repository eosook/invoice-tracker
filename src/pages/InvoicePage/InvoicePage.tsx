import EmptyInvoiceList from '../../components/EmptyInvoiceList/EmptyInvoiceList'
import Invoice from '../../components/Invoice/Invoice'
import InvoiceHeader from '../../components/InvoiceHeader/InvoiceHeader'
import './InvoicePage.scss'

type InvoiceListProps = {
    mode: string
}

export default function InvoiceList({mode}:InvoiceListProps){
    return (
        <main className={mode === "light" ? "invoice-list" : "invoice-list invoice-list--dark"}>
            <InvoiceHeader mode={mode}/>
            {/* <EmptyInvoiceList /> */}
            <Invoice mode={mode} id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
            <Invoice mode={mode} id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"pending"}/>
            <Invoice mode={mode} id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
            <Invoice mode={mode} id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
            <Invoice mode={mode} id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"pending"}/>
            <Invoice mode={mode} id={"RT3080"} name={"Jensen Huang"} date={"19 Aug 2021"} amount={1800.90} status={"paid"}/>
        </main>
    )
}