import React from "react";

export default class FormElement extends React.Component {
  state = {
    nama: '',
    gender: '',
    alamat: '',
    member: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(`
      nama: ${this.state.nama}
      gender: ${this.state.gender}
      alamat: ${this.state.alamat}
      member: ${this.state.member ?  `yes` : `no`}
    `)
    this.setState({
      nama: '',
      gender: '',
      alamat: '',
      member: false
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" className="form-control" placeholder="Nama Anda" defaultValue={this.state.nama} onChange={e => this.setState({nama: e.target.value})} />
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" value={'laki-laki'} onChange={e => this.setState({gender: e.target.value})}/>
          <label className="form-check-label">
            Pria
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" value={'perempuan'} onChange={e => this.setState({gender: e.target.value})} />
          <label className="form-check-label">
            Wanita
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat</label>
          <textarea className="form-control" rows="3" name="alamat" defaultValue={this.state.alamat} onChange={e => this.setState({alamat: e.target.value})}></textarea>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" name="member" onChange={e => this.setState({member: e.target.checked})} checked={this.setState.member} />
          <label className="form-check-label" >
            Member
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}