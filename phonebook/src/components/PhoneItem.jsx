import React from 'react';

export default function PhoneItem(props) {
    return <tr>
        <th scope="row">{props}</th>
        <th scope="row">{props.Phone.id}</th>
        <th scope="row">{props.Phone.nama}</th>
        <th scope="row">{props.Phone.phone}</th>
        <th scope="row">{props.Phone.index}</th>
        <td>
            {props.sent ? (
                <div>
                    <button type="submit" className="btn mr-2" onClick={props.onEdit}>
                        <i className="fas fa-pencil-alt"></i> Edit</button>
                    <button type="button" className="btn" onClick={props.onDelete}><i className="fas fa-trash"></i> Delete</button>
                </div>
            ) :
                <button type="button" onClick={props.resend} className="btn">
                    <i className="fas fa-sync-alt"></i> Resend</button>
            }
        </td>
    </tr>

}