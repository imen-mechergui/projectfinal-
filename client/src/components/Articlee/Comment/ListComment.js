import React from 'react'
import CardComment from '../Comment/CardComment'
const ListComments=({comments})=>{
    return(<div>
{
    comments.map(el =><CardComment key = {el._id } comment = {el}/>)
}
    </div>)

} 
export default ListComments