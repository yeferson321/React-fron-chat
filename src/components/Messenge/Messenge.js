import './Messenge.css';
import { useForm } from './useForm';

function Messenge() {

    const { messageText, filesSelect, setMessageText, handleSubmit } = useForm();

    return (
        <div className='footer'>

            <form className='form' onSubmit={handleSubmit}>
                <div className="input-group">

                    <input type="text" className="form-control" placeholder="Message" aria-label="Recipient's message" aria-describedby="button-addon2"
                        onChange={e => setMessageText(e.target.value)} value={messageText} />

                    <label className="icon btn btn-outline-secondary" >
                        <input type="file" className='input'
                            onChange={filesSelect} multiple />
                        <i className="bi bi-images"></i>
                    </label>

                    <button className="seen btn btn-outline-secondary" type="submit"><i className="icon bi bi-send"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Messenge