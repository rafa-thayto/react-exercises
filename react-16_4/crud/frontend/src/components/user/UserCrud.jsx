import React from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: ''},
  list: []
}

export default class UserCrud extends React.Component {

  state = { ...initialState }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    axios(baseUrl)
      .then(res => {
        this.setState({ list: res.data })
      })
  }

  clear () {
    this.setState({ user: initialState.user })
  }

  save () {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(res => {
        const list = this.getUpdatedList(res.data)
        this.setState({ user: initialState.user, list })
      })
  }

  load (user) {
    this.setState({ user })
  }

  remove (user) {
    axios.delete(`${baseUrl}/${user.id}`)
      .then(res => {
        const list = this.getUpdatedList(user, false)
        this.setState({ list })
      })
  }

  getUpdatedList (user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if (user) list.unshift(user)
    return list
  }

  updateField (event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  renderForm () {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name"
              className='form-control'
              value={this.state.user.name}
              onChange={e => this.updateField(e)}
              placeholder='Digite o nome' />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"
              className='form-control'
              value={this.state.user.email}
              onChange={e => this.updateField(e)}
              placeholder='Digite o email' />
          </div>
        </div>

      <hr/>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={e => this.save(e)}>
              Salvar
            </button>
            <button className="btn btn-secundary ml-2"
              onClick={e => this.clear(e)}>
              Cancelar
            </button>
          </div>
        </div>

      </div>
    )
  }

  renderTable () {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows () {
    return this.state.list
      .map(user => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-warning"
                onClick={() => this.load(user)}>
                <i className='fa fa-pencil'></i>
              </button>
              <button className="btn btn-danger ml-2"
                onClick={() => this.remove(user)}>
                <i className='fa fa-trash'></i>
              </button>
            </td>
          </tr>
        )
      })
  }

  render () {
    return (
      <Main {...headerProps} >
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}
