import React from 'react';

export default function PhoneItem(props){
return <tr>
<th scope="row">{props.Phone.id}</th>
<th scope="row">{props.Phone.nama}</th>
<th scope="row">{props.Phone.phone}</th>

</tr>

}