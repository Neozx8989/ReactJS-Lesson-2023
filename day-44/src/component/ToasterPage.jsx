import { toast, ToastContainer } from "react-toastify"

export default function ToasterPage (){
    const notify = () => toast("Амжилттай хадгалагдлаа ! ✅");
    return (
        <div className="toast-area">
            <button onClick={notify}>Хадгалах</button>
            <ToastContainer/>
        </div>
    )
}