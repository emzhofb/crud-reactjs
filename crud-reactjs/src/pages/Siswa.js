import React, { Component } from 'react'
import axios from 'axios'

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
        axios.get('http://localhost:3000/siswas').then(res => {
            this.setState({siswa: res.data.data})
        }).catch(err => console.log(err))
    }
    render () {
        return (
            <div>
                <h1>Data Siswa</h1>
                <table className="table">
                    <thead>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Kelas</th>
                    </thead>
                    <tbody>
                        {
                            this.state.siswa.map((data, index) => {
                                return (
                                    <tr>
                                        <td> { data.nama } </td>
                                        <td> { data.alamat } </td>
                                        <td> { data.kelas } </td>
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