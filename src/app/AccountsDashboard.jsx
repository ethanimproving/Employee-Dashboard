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
    accounts: 
    [
        {
            "id": -1,
            "name": "HARD Johnny Cash - Give_A_Plz ",
            "email": "JCash@money.com",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": []
        },
        {
            "id": 5,
            "name": "JG",
            "email": "jg@nowhere.con",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": [
                {
                    "number": "1112223333",
                    "type": "mobile"
                },
                {
                    "number": "2223334444",
                    "type": "home"
                }
            ]
        },
        {
            "id": 9,
            "name": "JG Wentworth",
            "email": "user@example.org",
            "isEmployee": false,
            "departmentId": null,
            "phoneNumbers": [
                {
                    "number": "877-cash-now",
                    "type": "Mobile"
                }
            ]
        },
        {
            "id": 10,
            "name": "Name",
            "email": "test@example.org",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": [
                {
                    "number": "281-555-1234",
                    "type": "Home"
                },
                {
                    "number": "832-555-1234",
                    "type": "Mobile"
                },
                {
                    "number": "713-555-1234",
                    "type": "Office"
                }
            ]
        },
        {
            "id": 13,
            "name": "Jaina Proudmoore",
            "email": "J2J@dlkj.com",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": []
        },
        {
            "id": 19,
            "name": "Lil Nas Angular",
            "email": "au@au.com",
            "isEmployee": true,
            "departmentId": null,
            "phoneNumbers": []
        },
        {
            "id": 20,
            "name": "The Developer Formerly Known As Prince",
            "email": "prince@purplerain.com",
            "isEmployee": false,
            "departmentId": null,
            "phoneNumbers": []
        },
        {
            "id": 21,
            "name": "James Bond",
            "email": "007@mi6.uk",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": [
                {
                    "number": "9998887777",
                    "type": "mobile"
                },
                {
                    "number": "8887776666",
                    "type": "fax"
                }
            ]
        },
        {
            "id": 22,
            "name": "General",
            "email": "TheGeneral@insurance.com",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": [
                {
                    "number": "1800",
                    "type": null
                }
            ]
        },
        {
            "id": 23,
            "name": "RockyQERWQEQWE",
            "email": "RBalboa@boxing.com",
            "isEmployee": null,
            "departmentId": null,
            "phoneNumbers": [
                {
                    "number": "3243444443535",
                    "type": null
                }
            ]
        },
        {
            "id": 24,
            "name": "John Doe Test",
            "email": "jdoooo@googs.com",
            "isEmployee": false,
            "departmentId": null,
            "phoneNumbers": []
        },
        {
            "id": 25,
            "name": "Test Debug",
            "email": "my@null.com",
            "isEmployee": null,
            "departmentId": null,
            "phoneNumbers": []
        },
        {
            "id": 26,
            "name": "TheRealest",
            "email": "hehe",
            "isEmployee": false,
            "departmentId": 0,
            "phoneNumbers": []
        },
        {
            "id": 1,
            "name": "Test User",
            "email": "user@example.org",
            "isEmployee": true,
            "departmentId": 1,
            "phoneNumbers": [
                {
                    "number": "555-1212",
                    "type": "home"
                }
            ]
        }
    ]
  }

  render() {
    return <>
      <h1>Accounts Dashboard</h1>
      <Accounts List accounts={this.state.accounts}/>
    </>;
  }

  componentDidMount() {
    this.accountsRepository.getAccounts()
      .then(account => this.setState(account));
  }

}