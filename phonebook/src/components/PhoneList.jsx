import React from 'react';
import PhoneItem from './PhoneItem'


//embed must use {}
export default function PhoneList(props) {
    const listItems = props.data.map((item, index) =>
        <PhoneItem key={index} Phone={item} remove={() => props.deletePhone(item.id)} />
    );
    return (
        <table >
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nama</th>
                <th scope="col">Nomor Telpon</th>
            </tr>
        </thead>
        <tbody>
            {listItems}
        </tbody>
    </table>

    )
} 