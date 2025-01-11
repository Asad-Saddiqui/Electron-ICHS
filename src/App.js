

import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'
import { ConfigProvider } from 'antd';
import User from './Pages/User'
import File from './Pages/File'
import Company from './Pages/Company'
import Tenants from './Pages/Tenants'
import Bank from './Pages/Bank'
import FileList from './Pages/FileList'
import BankList from './Pages/BankList'
import PaymentVocher from './Pages/PaymentVocher'
import PaymentListVoucher from './Pages/PaymentListVoucher'
import PaymentInvoice from './Pages/PaymentInvoice'
import PaymentListInvoice from './Pages/PaymentListInvoice'
import Transaction from './Reports/Transaction';
import AccountBalance from './Reports/AccountBalance';
import Income from './Reports/Income';
import Expense from './Reports/Expense';
import TrialBalance from './Reports/TrialBalance';
import BalanceSheet from './Reports/BalanceSheet';
function App() {
  return (
    <ConfigProvider theme={{
      "token": {
        "controlHeight": 38
      },
      "components": {
        "Input": {
          "borderRadius": 2
        },
        "Menu": {
          "activeBarBorderWidth": 0
        },
        "Select": {
          "borderRadius": 2,
          "borderRadiusLG": 2
        },
        "Button": {
          "borderRadius": 2
        },
        "Table": {
          "fontSize": 10,
          "padding": 8,
          "headerBorderRadius": 0,
          "borderRadius": 0,
          "fontWeightStrong": 60
        },
        "DatePicker": {
          "borderRadius": 2,
          "borderRadiusLG": 2
        }
      }
    }}>
      <MemoryRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={< MainLayout />}>
            {/* <Route index element={<Dashboard />} /> */}
            <Route path="user" element={<User />} />
            <Route path="company" element={<Company />} />
            <Route path="Tenants" element={<Tenants />} />
            <Route path="Bank" element={<Bank />} />
            <Route path="bank-list" element={<BankList />} />
            <Route path="payment-Voucher" element={<PaymentVocher />} />
            <Route path="payment-list-Voucher" element={<PaymentListVoucher />} />
            <Route path="payment-Invoice" element={<PaymentInvoice />} />
            <Route path="payment-list-Invoice" element={<PaymentListInvoice />} />
            <Route path="file" element={<File />} />
            <Route path="file-list" element={<FileList />} />
            <Route path="Transaction" element={<Transaction />} />
            <Route path="Account Balance" element={<AccountBalance />} />
            <Route path="Income" element={<Income />} />
            <Route path="Expense" element={<Expense />} />
            <Route path="Trial Balance" element={<TrialBalance />} />
            <Route path="Balance Sheet" element={<BalanceSheet />} />
            <Route index element={<BalanceSheet />} />

          </Route>
        </Routes>
      </MemoryRouter>
    </ConfigProvider>
  );
}
export default App;