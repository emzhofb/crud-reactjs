import React, { Component } from 'react'
import axios from 'axios'

class SiswaEdit extends Component {
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
    componentDidMount () {
        this.getData()
    }
    getData = () => {
        const token = localStorage.getItem('token')
        const headers = {
            token: token
        }
        const siswaId = this.props.match.params.id
        axios.get(`http://localhost:4000/siswas/${siswaId}`, {headers}).then(res => {
            const { nama, alamat, kelas } = res.data.data
            this.setState({
                nama,
                alamat,
                kelas
            })
        }).catch(err => console.log(err))
    }
    handleSubmit = (e) => {
        const token = localStorage.getItem('token')
        const headers = {
            token: token
        }
        const siswaId = this.props.match.params.id
        const { nama, alamat, kelas } = this.state
        axios.put(`http://localhost:4000/siswas/${siswaId}`, {nama, alamat, kelas}, {headers}).then(res => {
            this.props.history.push('/siswa')
        }).catch(err => console.log(err))
        e.preventDefault()
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        return (
            <div>
                <h1>Edit Siswa</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nama</label>
                        <input
                            name="nama"
                            value={this.state.nama}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Alamat</label>
                        <input
                            name="alamat"
                            value={this.state.alamat}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Kelas</label>
                        <input
                            name="kelas"
                            value={this.state.kelas}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SiswaEdit