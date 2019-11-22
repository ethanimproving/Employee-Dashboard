import React from 'react';
import { AccountsRepository } from '../api';
import { Department } from '../models';
import { Accounts } from './Accounts';

export class AccountsDashboard extends React.Component {

  accountsRepository = new AccountsRepository();

  departmemnts = [
    new Department(1, 'Recruiting'),
    new Department(2, 'Marketing'),
    new Department(3, 'Sales'),
    new Department(4, 'Accounting'),
  ]

  state = {
    name: '',
    email: '',
    isEmployee: false,
    departmentId: 0,
    accounts: []
  }

  render() {
    return <>
      <h1>Accounts Dashboard</h1>
      <Accounts List accounts={this.state.accounts}/>
    </>;
  }

  componentDidMount() {
    this.accountsRepository.getAccounts()
      .then(account => this.setState({accounts: account }));
  }

}