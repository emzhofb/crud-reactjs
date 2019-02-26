import React, { Component } from 'react'
import axios from 'axios'

class SiswaCreate extends Component {
    constructor () {
        super()
        this.state = {
            nama: '',
            alamat: '',
            kelas: '',
            errorNama: '',
            errorAlamat: '',
            errorKelas: ''
        }
    }
    handleValidation = () => {
        const nama = this.state.nama
        const alamat = this.state.alamat
        const kelas = this.state.kelas
        let errorNama = this.state.errorNama
        let errorAlamat = this.state.errorAlamat
        let errorKelas = this.state.errorKelas
        let formIsValid = true
        // nama
        if (!nama) {
            formIsValid = false
            errorNama = 'Cannot be empty'
        } else if (typeof nama !== "undefined") {
            if (!nama.match(/^[a-zA-Z\s]+$/)) {
                formIsValid = false
                errorNama = 'Only letters'
            }
        }
        // alamat
        if (!alamat) {
            formIsValid = false
            errorAlamat = 'Cannot be empty'
        }
        // kelas
        if (!kelas) {
            formIsValid = false
            errorKelas = 'Cannot be empty'
        } else if (typeof kelas !== "undefined") {
            if (!kelas.match(/^[0-9]+$/)) {
                formIsValid = false
                errorKelas = 'Only Numbers'
            }
        }
        this.setState({errorNama: errorNama, errorAlamat: errorAlamat, errorKelas: errorKelas})
        return formIsValid
    }
    handleSubmit = (e) => {
        const token = localStorage.getItem('token')
        const headers = {
            token: token
        }
        const { nama, alamat, kelas } = this.state
        console.log(nama, alamat, kelas)
        e.preventDefault()
        if (this.handleValidation()) {
            alert('Berhasil menambah siswa')
            axios.post("http://localhost:4000/siswas", {nama, alamat, kelas}, {headers}).then(res => {
                this.props.history.push('/siswa')
            }).catch(err => console.log(err))
        } else {
            alert('Gagal bro')
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        return (
            <div>
                <h1>Tambah Siswa</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nama</label>
                        <input
                            name="nama"
                            value={this.state.nama}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <span className="error">{this.state.errorNama}</span>
                    </div>
                    <div className="form-group">
                        <label>Alamat</label>
                        <input
                            name="alamat"
                            value={this.state.alamat}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <span className="error">{this.state.errorAlamat}</span>
                    </div>
                    <div className="form-group">
                        <label>Kelas</label>
                        <input
                            name="kelas"
                            value={this.state.kelas}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <span className="error">{this.state.errorKelas}</span>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SiswaCreate