import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state ={
        isOpen:false
    }
    render() {
        return(
        <React.Fragment>
            <button className="divwid">
            <button onClick={()=> this.setState({isOpen:true})}> Buy This Product </button>

           {this.state.isOpen && <div className='modal'>
                <div className='modal-body'>
                <form className="form">
                    <label>FirtsName <input type="text" className="inp1" placeholder="Karen"/></label>
                    <label>LastName  <input type="text" className="inp1" placeholder="Asatryan"/></label>
                    <label>Email     <input type="text" className="inp3" placeholder="Karen.Asa85@mail.ru"/></label> 
                    <label>Address   <input type="address" className="inp2" placeholder="ARmenia Erevan Pushhki 15/2"/></label>
                    <label>Telefon   <input type="tel" className="inp4" placeholder="+374 99 85 85 85"/></label>
                    <label>Banking Card <input type="text" placeholder="4576 **** **** *587"/></label>
                   <div className="btn-div">
                    <button className="butt">Buy</button>
                    <button onClick={()=> this.setState({isOpen:false})} className="butt">Cancel Buy</button>
                    </div>
                    </form>
                </div>
            </div>}
            </button>
            </React.Fragment>
        )
    }
}
