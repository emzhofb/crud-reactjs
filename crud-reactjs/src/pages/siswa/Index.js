import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Siswa extends Component {
    constructor () {
        super()
        this.state = {
            siswa: [
                {
                    nama: 'Budi',
                    alamat: 'Jakarta',
                    kelas: 1
                },
                {
                    nama: 'Yadi',
                    alamat: 'Lampung',
                    kelas: 3
                }
            ]
        }
    }
    componentDidMount () {
        this.getInitialData()
    }
    getInitialData = () => {
        const token = localStorage.getItem('token')
        const headers = {
            token: token
        }
        axios.get('http://localhost:4000/siswas', {headers}).then(res => {
            this.setState({siswa: res.data.data})
        }).catch(err => console.log(err))
    }
    handleDelete = (id) => {
        const token = localStorage.getItem('token')
        const headers = {
            token: token
        }
        axios.delete(`http://localhost:4000/siswas/${id}`, {headers}).then(res => {
            this.getInitialData()
        }).then(alert('success delete')).catch(err => console.log(err))
    }
    handleEdit = (id) => {
        this.props.history.push(`/siswa/edit/${id}`)
    }
    render () {
        return (
            <div>
                <h1>Data Siswa</h1>
                <Link to="/siswa/create" className="btn btn-primary">Tambah Siswa</Link>
                <table className="table">
                    <thead>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Kelas</th>
                        <th>Aksi</th>
                    </thead>
                    <tbody>
                        {
                            this.state.siswa.map((data, index) => {
                                return (
                                    <tr>
                                        <td> { data.nama } </td>
                                        <td> { data.alamat } </td>
                                        <td> { data.kelas } </td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => {this.handleEdit(data.id)}}
                                                >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {if (window.confirm('Seriously ?')) {this.handleDelete(data.id)}}}
                                                >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Siswa