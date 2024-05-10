import { useDispatch } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice/contactsSlice";
import { deleteContact } from "../../redux/contactsSlice/contactsSlice";


const Contact = ({ data }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(data.id))
  }

  return (
    <div>
          <p>{data.name}</p>
          <p>{ data.number}</p>
          <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Contact