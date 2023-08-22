import Link from "next/link";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NavigationLink=()=>{
    return (
        <div className="conatainer">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>
                            <Link href={'/'}>Home</Link>
                        </th>
                        <th>
                            <Link href={'/productinfo'}>Product</Link>
                        </th>
                        <th>
                            <Link href={'/ecomm'}>Ecommerce</Link>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default NavigationLink;