import './EmptyInvoiceList.scss'
import emptyImage from '../../assets/images/illustration-empty.svg';

export default function EmptyInvoiceList(){
    return (
        <div className="emptyInvoice">
            <img src={emptyImage}></img>
        </div>
    )
}