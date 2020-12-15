import React from 'react';
import PhoneItem from './PhoneItem'


//embed must use {}
export default function PhoneList(props) {
    const listItems = props.data.map((item, index) =>
        <PhoneItem key={index} Phone={item} remove={() => props.deletePhone(item.id)} />
    );
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Nomor Telpon</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    )
} 